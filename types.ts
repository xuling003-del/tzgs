
export enum CourseStage {
  PSYCHOLOGY = '心态与思维',
  BASICS = '股市通行证',
  FINANCIALS = '财报门道',
  MACRO = '宏观与行业',
  TECHNICAL = '实战技术课',
  ADVANCED = '高级实战课',
  RISK = '风险控制与心态管理',
  STRATEGY = '交易系统',
  RISK_MANAGEMENT = '风险管理',
  FUND_ETF = '基金与ETF投资',
  TRADING_SYSTEM = '交易系统构建',
  QUANTITATIVE = '量化投资入门'
}

export interface TermDefinition {
  term: string;
  definition: string;
}

export type VisualType = 
  | 'position' 
  | 'kline' 
  | 'shorting' 
  | 'quant' 
  | 'asset-allocation' 
  | 'volume-price' 
  | 'market-cycle' 
  | 'fundamental'
  | 'market-sectors'
  | 'order-types'
  | 'dividend-logic'
  | 'ma-lines'
  | 'macd-logic'
  | 'st-risk'
  | 'cognitive-bias'
  | 'three-statements'
  | 'interest-rate-seesaw'
  | 'risk-reward-ratio'
  | 'stock-types'
  | 'trading-mechanism'
  | 'account-permissions'
  | 'fee-structure'
  | 'market-participants'
  | 'kline-patterns'
  | 'volume-analysis'
  | 'macd-indicator'
  | 'kdj-indicator'
  | 'rsi-indicator'
  | 'trend-support'
  | 'pattern-analysis'
  | 'bollinger-bands'
  | 'wave-theory'
  | 'short-selling'
  | 'options-basics'
  | 'futures-contracts'
  | 'hedging-strategies'
  | 'arbitrage-opportunities'
  | 'sector-rotation'
  | 'value-investing'
  | 'growth-investing'
  | 'swing-trading'
  | 'position-sizing'
  | 'stop-loss'
  | 'risk-control'
  | 'position-management'
  | 'psychological-bias'
  | 'emotional-control'
  | 'trading-discipline'
  | 'money-management'
  | 'trading-journal'
  | 'portfolio-theory'
  | 'risk-types'
  | 'risk-control-tools'
  | 'index-fund'
  | 'etf-investment'
  | 'active-fund'
  | 'fund-allocation'
  | 'trading-framework'
  | 'entry-exit-rules'
  | 'backtesting'
  | 'system-optimization'
  | 'quant-basics'
  | 'factor-model'
  | 'algorithm-trading';

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
