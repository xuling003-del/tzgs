/**
 * 课程模块加载器
 * 负责按需加载课程模块，优化性能
 */
import { courseManager } from './CourseManager';

class CourseModuleLoader {
  /**
   * 加载特定课程的所有模块
   */
  loadCourseModules(courseId: string) {
    const course = courseManager.getCourse(courseId);
    if (!course) {
      throw new Error(`课程 ${courseId} 不存在`);
    }
    
    // 按顺序排序模块
    return [...course.modules].sort((a, b) => a.order - b.order);
  }
  
  /**
   * 加载特定模块
   */
  loadModule(courseId: string, moduleId: string) {
    const course = courseManager.getCourse(courseId);
    if (!course) {
      throw new Error(`课程 ${courseId} 不存在`);
    }
    
    return course.modules.find(module => module.id === moduleId);
  }
  
  /**
   * 预加载多个课程的模块
   */
  preloadCourses(courseIds: string[]) {
    return courseIds.map(id => {
      const course = courseManager.getCourse(id);
      return {
        id,
        title: course?.title || '未知课程',
        modulesCount: course?.modules.length || 0
      };
    });
  }
  
  /**
   * 获取模块内容（支持不同内容类型）
   */
  getModuleContent(module: any) {
    switch (module.type) {
      case 'text':
        return this.formatTextContent(module.content);
      case 'video':
        return this.createVideoContent(module.content);
      case 'quiz':
        return this.createQuizContent(module.content);
      case 'resource':
        return this.createResourceContent(module.content);
      default:
        return module.content;
    }
  }
  
  private formatTextContent(content: string) {
    // 这里可以扩展文本格式化逻辑
    return content;
  }
  
  private createVideoContent(content: string) {
    // 返回视频组件的配置
    return {
      type: 'video',
      src: content,
      controls: true
    };
  }
  
  private createQuizContent(content: string) {
    // 解析测验内容
    try {
      return JSON.parse(content);
    } catch (e) {
      console.error('解析测验内容失败:', e);
      return { questions: [] };
    }
  }
  
  private createResourceContent(content: string) {
    // 解析资源链接
    return {
      links: content.split('\n').filter(link => link.trim() !== '')
    };
  }
}

export const courseModuleLoader = new CourseModuleLoader();