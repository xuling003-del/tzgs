/**
 * 课程管理系统 - 模块化课程管理
 * 支持离线使用，采用模块化存储
 */
interface CourseModule {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'quiz' | 'resource';
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Course {
  id: string;
  title: string;
  description: string;
  modules: CourseModule[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // 以分钟为单位
  createdAt: Date;
  updatedAt: Date;
}

class CourseManager {
  private storageKey = 'courses';
  
  /**
   * 获取所有课程
   */
  getCourses(): Course[] {
    const coursesData = localStorage.getItem(this.storageKey);
    if (!coursesData) return [];
    
    try {
      const courses = JSON.parse(coursesData);
      // 将日期字符串转换为Date对象
      return courses.map((course: any) => ({
        ...course,
        createdAt: new Date(course.createdAt),
        updatedAt: new Date(course.updatedAt),
        modules: course.modules.map((module: any) => ({
          ...module,
          createdAt: new Date(module.createdAt),
          updatedAt: new Date(module.updatedAt)
        }))
      }));
    } catch (error) {
      console.error('解析课程数据失败:', error);
      return [];
    }
  }
  
  /**
   * 保存课程到本地存储
   */
  private saveCourses(courses: Course[]): void {
    try {
      const serialized = JSON.stringify(courses, (key, value) => {
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      localStorage.setItem(this.storageKey, serialized);
    } catch (error) {
      console.error('保存课程数据失败:', error);
    }
  }
  
  /**
   * 添加新课程
   */
  addCourse(courseData: Omit<Course, 'id' | 'modules' | 'createdAt' | 'updatedAt'>): Course {
    const courses = this.getCourses();
    const newCourse: Course = {
      ...courseData,
      id: this.generateId(),
      modules: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    courses.push(newCourse);
    this.saveCourses(courses);
    return newCourse;
  }
  
  /**
   * 更新课程信息
   */
  updateCourse(courseId: string, updates: Partial<Course>): Course | null {
    const courses = this.getCourses();
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) return null;
    
    const updatedCourse = {
      ...courses[courseIndex],
      ...updates,
      updatedAt: new Date()
    };
    
    courses[courseIndex] = updatedCourse;
    this.saveCourses(courses);
    return updatedCourse;
  }
  
  /**
   * 删除课程
   */
  deleteCourse(courseId: string): boolean {
    const courses = this.getCourses();
    const initialLength = courses.length;
    const filteredCourses = courses.filter(course => course.id !== courseId);
    
    if (filteredCourses.length === initialLength) {
      return false; // 未找到课程
    }
    
    this.saveCourses(filteredCourses);
    return true;
  }
  
  /**
   * 获取特定课程
   */
  getCourse(courseId: string): Course | undefined {
    return this.getCourses().find(course => course.id === courseId);
  }
  
  /**
   * 添加模块到课程
   */
  addModuleToCourse(courseId: string, moduleData: Omit<CourseModule, 'id' | 'createdAt' | 'updatedAt'>): CourseModule | null {
    const courses = this.getCourses();
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) return null;
    
    const newModule: CourseModule = {
      ...moduleData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    courses[courseIndex].modules.push(newModule);
    courses[courseIndex].updatedAt = new Date();
    
    this.saveCourses(courses);
    return newModule;
  }
  
  /**
   * 更新模块
   */
  updateModule(courseId: string, moduleId: string, updates: Partial<CourseModule>): CourseModule | null {
    const courses = this.getCourses();
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) return null;
    
    const moduleIndex = courses[courseIndex].modules.findIndex(m => m.id === moduleId);
    if (moduleIndex === -1) return null;
    
    const updatedModule = {
      ...courses[courseIndex].modules[moduleIndex],
      ...updates,
      updatedAt: new Date()
    };
    
    courses[courseIndex].modules[moduleIndex] = updatedModule;
    courses[courseIndex].updatedAt = new Date();
    
    this.saveCourses(courses);
    return updatedModule;
  }
  
  /**
   * 删除模块
   */
  deleteModule(courseId: string, moduleId: string): boolean {
    const courses = this.getCourses();
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) return false;
    
    const initialLength = courses[courseIndex].modules.length;
    const filteredModules = courses[courseIndex].modules.filter(m => m.id !== moduleId);
    
    if (filteredModules.length === initialLength) {
      return false; // 未找到模块
    }
    
    courses[courseIndex].modules = filteredModules;
    courses[courseIndex].updatedAt = new Date();
    
    this.saveCourses(courses);
    return true;
  }
  
  /**
   * 根据分类获取课程
   */
  getCoursesByCategory(category: string): Course[] {
    return this.getCourses().filter(course => course.category === category);
  }
  
  /**
   * 根据难度获取课程
   */
  getCoursesByDifficulty(difficulty: string): Course[] {
    return this.getCourses().filter(course => course.difficulty === difficulty);
  }
  
  /**
   * 搜索课程
   */
  searchCourses(query: string): Course[] {
    const lowerQuery = query.toLowerCase();
    return this.getCourses().filter(course => 
      course.title.toLowerCase().includes(lowerQuery) || 
      course.description.toLowerCase().includes(lowerQuery)
    );
  }
  
  /**
   * 生成唯一ID
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// 创建全局实例
export const courseManager = new CourseManager();