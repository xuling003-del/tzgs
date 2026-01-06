
export enum CourseStage {
  BASICS = '股市通行证',
  PSYCHOLOGY = '心态与思维',
  TECHNICAL = '实战技术课',
  FINANCIALS = '财报门道',
  MACRO = '宏观与行业',
  STRATEGY = '交易系统',
  RISK = '风险管理',
  FUNDS = '基金与ETF',
  BONDS = '债券与固收',
  SECTOR = '行业深度分析',
  WEALTH = '终身财富管理',
  ADVANCED = '进阶专题'
}

export interface TermDefinition {
  term: string;
  definition: string;
}

export type VisualType = 
  | 'cognitive-bias' 
  | 'order-book' 
  | 'kline-quiz' 
  | 'ma-lines'
  | 'three-statements'
  | 'pe-calculator'
  | 'interest-rate-seesaw'
  | 'position-simulator'
  | 'risk-meter'
  | 'fee-calc'
  | 'volume-chart'
  | 'macd-viz'
  | 'moat-radar'
  | 'kdj-rsi-viz'
  | 'merrill-clock'
  | 'portfolio-pie'
  | 'boll-bands'
  | 'compounding-viz'
  | 'sector-map-viz'
  | 'grid-trading-viz'
  | 'rebalance-viz';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  content: string;
  practicalTask: string;
  analogy: string;
  keyTerms: TermDefinition[];
  visualType?: VisualType;
  expertTip?: string;
}

export interface Module {
  stage: CourseStage;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessons: string[];
  currentLessonId: string | null;
}
