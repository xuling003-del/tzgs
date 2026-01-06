
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
      case 'pe-calculator': return <Visuals.PECalculator />;
      case 'position-simulator': return <Visuals.PositionSimulator />;
      case 'kline-quiz': return <Visuals.KlineQuizVisual />;
      case 'ma-lines': return <Visuals.MALinesVisual />;
      case 'fee-calc': return <Visuals.FeeCalcVisual />;
      case 'risk-meter': return <Visuals.RiskMeterVisual />;
      case 'order-book': return <Visuals.OrderBookVisual />;
      case 'volume-chart': return <Visuals.VolumeChartVisual />;
      case 'moat-radar': return <Visuals.MoatRadarVisual />;
      case 'kdj-rsi-viz': return <Visuals.KDJRSIViz />;
      case 'merrill-clock': return <Visuals.MerrillClockVisual />;
      case 'portfolio-pie': return <Visuals.PortfolioPieVisual />;
      case 'boll-bands': return <Visuals.BollBandsVisual />;
      case 'macd-viz': return <Visuals.MACDViz />;
      case 'compounding-viz': return <Visuals.CompoundingViz />;
      case 'sector-map-viz': return <Visuals.SectorMapViz />;
      case 'grid-trading-viz': return <Visuals.GridTradingViz />;
      case 'rebalance-viz': return <Visuals.RebalanceViz />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mr-4 text-xl">
              <i className={`fa-solid ${lesson.icon}`}></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">{lesson.title}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter bg-indigo-50 px-2 py-0.5 rounded">约 {lesson.duration}</span>
                <span className="text-[10px] text-slate-400">系统化投资课程</span>
              </div>
            </div>
          </div>
        </div>
        <div className="prose prose-indigo max-w-none">
          <div className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-wrap font-light">{lesson.content}</div>
        </div>
        {lesson.expertTip && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-xl">
            <div className="flex items-center text-amber-800 font-bold text-sm mb-1"><i className="fa-solid fa-user-tie mr-2"></i> 专家建议</div>
            <p className="text-sm text-amber-700 italic">{lesson.expertTip}</p>
          </div>
        )}
        {lesson.visualType && (
          <div className="my-10 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
            <div className="flex items-center justify-center space-x-2 text-slate-400 text-[10px] mb-4 font-bold uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-slate-200"></span><span>Interactive Lab · 实战实验室</span><span className="w-6 h-px bg-slate-200"></span>
            </div>
            {renderVisual()}
          </div>
        )}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 flex items-center"><i className="fa-solid fa-layer-group mr-2 text-indigo-300"></i> 本课术语对照</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.keyTerms.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group hover:shadow-lg">
                <div className="font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>{item.term}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.definition}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10"><div className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-4">通俗类比理解</div><p className="text-indigo-50 text-2xl leading-snug font-medium">“{lesson.analogy}”</p></div>
      </div>
      <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm">
        <div className="flex items-center space-x-4 mb-8"><div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-xl"><i className="fa-solid fa-vial"></i></div><h3 className="text-slate-900 font-black text-xl tracking-tight">实战行动清单</h3></div>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed mb-8">{lesson.practicalTask}</div>
        <button onClick={() => onComplete(lesson.id)} className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl shadow-xl active:scale-[0.98] flex items-center justify-center text-lg tracking-tight">我已完成并进入下一节 <i className="fa-solid fa-arrow-right ml-3 text-xs opacity-50"></i></button>
      </div>
    </div>
  );
};

export default LessonViewer;
