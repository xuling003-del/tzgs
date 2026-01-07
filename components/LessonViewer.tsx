
import React from 'react';
import { Lesson } from '../types';
import * as Visuals from './Visuals';

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: (id: string) => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onComplete }) => {
  const renderVisual = () => {
    switch (lesson.visualType) {
      case 'cognitive-bias': return <Visuals.CognitiveBiasVisual />;
      case 'three-statements': return <Visuals.ThreeStatementsVisual />;
      case 'interest-rate-seesaw': return <Visuals.InterestRateSeesawVisual />;
      case 'risk-reward-ratio': return <Visuals.RiskRewardRatioVisual />;
      case 'position': return <Visuals.PositionVisual />;
      case 'kline': return <Visuals.KlineVisual />;
      case 'ma-lines': return <Visuals.MALinesVisual />;
      case 'stock-types': return <Visuals.StockTypesVisual />;
      case 'trading-mechanism': return <Visuals.TradingMechanismVisual />;
      case 'account-permissions': return <Visuals.AccountPermissionsVisual />;
      case 'fee-structure': return <Visuals.FeeStructureVisual />;
      case 'order-types': return <Visuals.OrderTypesVisual />;
      case 'market-participants': return <Visuals.MarketParticipantsVisual />;
      case 'kline-patterns': return <Visuals.KlinePatternsVisual />;
      case 'volume-analysis': return <Visuals.VolumeAnalysisVisual />;
      case 'macd-indicator': return <Visuals.MACDIndicatorVisual />;
      case 'kdj-indicator': return <Visuals.KDJIndicatorVisual />;
      case 'rsi-indicator': return <Visuals.RSIIndicatorVisual />;
      case 'trend-support': return <Visuals.TrendSupportVisual />;
      case 'pattern-analysis': return <Visuals.PatternAnalysisVisual />;
      case 'bollinger-bands': return <Visuals.BollingerBandsVisual />;
      case 'wave-theory': return <Visuals.WaveTheoryVisual />;
      case 'short-selling': return <Visuals.ShortSellingVisual />;
      case 'options-basics': return <Visuals.OptionsBasicsVisual />;
      case 'futures-contracts': return <Visuals.FuturesContractsVisual />;
      case 'hedging-strategies': return <Visuals.HedgingStrategiesVisual />;
      case 'arbitrage-opportunities': return <Visuals.ArbitrageOpportunitiesVisual />;
      case 'sector-rotation': return <Visuals.SectorRotationVisual />;
      case 'value-investing': return <Visuals.ValueInvestingVisual />;
      case 'growth-investing': return <Visuals.GrowthInvestingVisual />;
      case 'swing-trading': return <Visuals.SwingTradingVisual />;
      case 'position-sizing': return <Visuals.PositionSizingVisual />;
      case 'stop-loss': return <Visuals.StopLossVisual />;
      case 'risk-control': return <Visuals.RiskControlVisual />;
      case 'position-management': return <Visuals.PositionManagementVisual />;
      case 'psychological-bias': return <Visuals.PsychologicalBiasVisual />;
      case 'emotional-control': return <Visuals.EmotionalControlVisual />;
      case 'trading-discipline': return <Visuals.TradingDisciplineVisual />;
      case 'money-management': return <Visuals.MoneyManagementVisual />;
      case 'trading-journal': return <Visuals.TradingJournalVisual />;
      case 'portfolio-theory': return <Visuals.PortfolioTheoryVisual />;
      case 'risk-types': return <Visuals.RiskTypesVisual />;
      case 'risk-control-tools': return <Visuals.RiskControlToolsVisual />;
      case 'index-fund': return <Visuals.IndexFundVisual />;
      case 'etf-investment': return <Visuals.ETFInvestmentVisual />;
      case 'active-fund': return <Visuals.ActiveFundVisual />;
      case 'fund-allocation': return <Visuals.FundAllocationVisual />;
      case 'trading-framework': return <Visuals.TradingFrameworkVisual />;
      case 'entry-exit-rules': return <Visuals.EntryExitRulesVisual />;
      case 'backtesting': return <Visuals.BacktestingVisual />;
      case 'system-optimization': return <Visuals.SystemOptimizationVisual />;
      case 'quant-basics': return <Visuals.QuantBasicsVisual />;
      case 'factor-model': return <Visuals.FactorModelVisual />;
      case 'algorithm-trading': return <Visuals.AlgorithmTradingVisual />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 课程正文 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mr-4 text-xl">
              <i className={`fa-solid ${lesson.icon}`}></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                {lesson.title}
              </h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter bg-indigo-50 px-2 py-0.5 rounded">
                  约 {lesson.duration}
                </span>
                <span className="text-[10px] text-slate-400">专家实战课系列</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose prose-indigo max-w-none">
          <div className="text-lg text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap font-light">
            {lesson.content}
          </div>
        </div>

        {/* 专家寄语 */}
        {lesson.expertTip && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-xl">
            <div className="flex items-center text-amber-800 font-bold text-sm mb-1">
              <i className="fa-solid fa-user-tie mr-2"></i> 专家避坑指南
            </div>
            <p className="text-sm text-amber-700 italic">{lesson.expertTip}</p>
          </div>
        )}

        {/* 动态可视化示意图 */}
        {lesson.visualType && (
          <div className="my-10 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
            <div className="flex items-center justify-center space-x-2 text-slate-400 text-[10px] mb-4 font-bold uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-slate-200"></span>
              <span>Visual Insight · 深度图解</span>
              <span className="w-6 h-px bg-slate-200"></span>
            </div>
            {renderVisual()}
          </div>
        )}

        {/* 核心术语词典 */}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center">
            <i className="fa-solid fa-layer-group mr-2 text-indigo-300"></i> 专业术语表
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.keyTerms.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group hover:shadow-lg hover:shadow-indigo-50/50">
                <div className="font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                  {item.term}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.definition}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 类比模块 */}
      <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <div className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-4">大白话类比</div>
          <p className="text-indigo-50 text-2xl leading-snug font-medium">
            “{lesson.analogy}”
          </p>
        </div>
      </div>

      {/* 实践任务 */}
      <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-xl">
            <i className="fa-solid fa-vial"></i>
          </div>
          <h3 className="text-slate-900 font-black text-xl tracking-tight">实战演练任务</h3>
        </div>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed mb-8">
          {lesson.practicalTask}
        </div>
        <button 
          onClick={() => onComplete(lesson.id)}
          className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-[0.98] flex items-center justify-center text-lg tracking-tight"
        >
          我已掌握并完成任务 <i className="fa-solid fa-arrow-right ml-3 text-xs opacity-50"></i>
        </button>
      </div>
    </div>
  );
};

export default LessonViewer;
