import { Lesson, Module, CourseStage } from '../../types';
import courseData from '../data/courses-full.json';

// 阶段名称到枚举的映射
const STAGE_ENUM_MAP: Record<string, CourseStage> = {
  '心态与思维': CourseStage.PSYCHOLOGY,
  '股市通行证': CourseStage.BASICS,
  '财报门道': CourseStage.FINANCIALS,
  '宏观与行业': CourseStage.MACRO,
  '实战技术课': CourseStage.TECHNICAL,
  '高级实战课': CourseStage.ADVANCED,
  '风险控制与心态管理': CourseStage.RISK,
  '交易系统': CourseStage.STRATEGY,
  '风险管理': CourseStage.RISK_MANAGEMENT,
  '基金与ETF投资': CourseStage.FUND_ETF,
  '交易系统构建': CourseStage.TRADING_SYSTEM,
  '量化投资入门': CourseStage.QUANTITATIVE
};

// 创建Lesson对象
const createLesson = (course: any): Lesson => {
  const lessonNumber = course.lessonNumber;
  const id = `lesson-${lessonNumber}`;
  
  // 使用课程数据或默认值
  return {
    id,
    title: course.title || `课程${lessonNumber}`,
    duration: course.duration || '25分钟',
    description: course.description || `这是第${lessonNumber}课的描述`,
    icon: 'fa-book-open',
    content: course.content || `# ${course.title || `课程${lessonNumber}`}\n\n这是课程${lessonNumber}的详细内容。`,
    practicalTask: course.practicalTask || '暂无实践任务',
    analogy: course.analogy || '投资就像航海，需要地图、指南针和耐心。',
    keyTerms: course.keyTerms || [],
    expertTip: course.expertTip || '投资有风险，入市需谨慎。'
  };
};

// 加载所有课程
const loadCourses = async (): Promise<Module[]> => {
  try {
    // 按阶段分组
    const modulesMap = new Map<CourseStage, Lesson[]>();
    
    // 初始化模块
    Object.values(CourseStage).forEach(stage => {
      modulesMap.set(stage, []);
    });
    
    // 处理课程数据
    for (const course of courseData.courses) {
      const stageEnum = STAGE_ENUM_MAP[course.stage] || CourseStage.BASICS;
      const lesson = createLesson(course);
      const lessons = modulesMap.get(stageEnum) || [];
      lessons.push(lesson);
      modulesMap.set(stageEnum, lessons);
    }
    
    // 转换为Module数组
    const modules: Module[] = [];
    modulesMap.forEach((lessons, stage) => {
      if (lessons.length > 0) {
        modules.push({
          stage,
          lessons
        });
      }
    });
    
    return modules;
  } catch (error) {
    console.error('Failed to load courses:', error);
    return [];
  }
};

export { loadCourses };