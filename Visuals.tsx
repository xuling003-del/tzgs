
import React, { useState, useEffect } from 'react';

// --- 网格交易模拟 ---
export const GridTradingViz = () => {
  const [price, setPrice] = useState(10);
  const grids = [8, 9, 10, 11, 12];
  
  return (
    <div className="bg-slate-900 p-6 rounded-2xl text-white">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">网格自动交易模拟</span>
        <span className="text-xl font-mono">当前价: ¥{price.toFixed(2)}</span>
      </div>
      <div className="space-y-2">
        {grids.slice().reverse().map(g => (
          <div key={g} className={`h-8 rounded flex items-center px-4 justify-between border ${price >= g ? 'bg-rose-500/20 border-rose-500/50' : 'bg-emerald-500/20 border-emerald-500/50'}`}>
            <span className="text-xs font-bold">价格档位 ¥{g}</span>
            <span className="text-[10px] uppercase font-black">{price >= g ? '卖出区域' : '买入区域'}</span>
          </div>
        ))}
      </div>
      <input type="range" min="7" max="13" step="0.1" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full mt-6 accent-indigo-500" />
      <p className="text-[10px] text-slate-500 mt-4 text-center">网格交易通过在震荡行情中频繁低买高卖来锁定微小利润。</p>
    </div>
  );
};

// --- 资产再平衡演示 ---
export const RebalanceViz = () => {
  const [stockVal, setStockVal] = useState(70);
  const bondVal = 100 - stockVal;
  
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <div className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest">动态再平衡演示 (目标 50:50)</div>
      <div className="flex h-12 rounded-full overflow-hidden mb-6 shadow-inner">
        <div className="bg-indigo-500 transition-all duration-500 flex items-center justify-center text-white text-[10px] font-bold" style={{ width: `${stockVal}%` }}>股票 {stockVal}%</div>
        <div className="bg-amber-400 transition-all duration-500 flex items-center justify-center text-slate-800 text-[10px] font-bold" style={{ width: `${bondVal}%` }}>债券 {bondVal}%</div>
      </div>
      <div className="flex justify-between gap-4">
        <button onClick={() => setStockVal(Math.min(90, stockVal + 10))} className="flex-1 bg-rose-50 text-rose-600 py-2 rounded-xl text-xs font-bold border border-rose-100">股市大涨</button>
        <button onClick={() => setStockVal(50)} className="flex-1 bg-indigo-600 text-white py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-200">一键再平衡</button>
        <button onClick={() => setStockVal(Math.max(10, stockVal - 10))} className="flex-1 bg-emerald-50 text-emerald-600 py-2 rounded-xl text-xs font-bold border border-emerald-100">股市大跌</button>
      </div>
      <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">当股市大涨导致比例失调，再平衡要求你“卖出昂贵的股票，买入便宜的债券”，从而强制执行低买高卖。</p>
    </div>
  );
};

// --- 复利增长模拟 ---
export const CompoundingViz = () => {
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(10);
  
  const generateData = () => {
    let current = 10000;
    const data = [];
    for (let i = 0; i <= years; i++) {
      data.push(current);
      current = current * (1 + rate / 100);
    }
    return data;
  };

  const data = generateData();
  const max = Math.max(...data);

  return (
    <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest">复利增长曲线</h4>
        <div className="text-right">
          <div className="text-2xl font-black">¥{data[data.length - 1].toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
          <div className="text-[10px] text-slate-400">初始本金: ¥10,000</div>
        </div>
      </div>
      
      <div className="h-40 flex items-end space-x-1 mb-8">
        {data.map((v, i) => (
          <div 
            key={i} 
            className="flex-1 bg-indigo-500 rounded-t-sm transition-all duration-500 hover:bg-indigo-400 cursor-help relative group"
            style={{ height: `${(v / max) * 100}%` }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              第{i}年: ¥{Math.round(v)}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">投资时长: {years} 年</div>
          <input type="range" min="5" max="40" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-full appearance-none" />
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">年化收益率: {rate}%</div>
          <input type="range" min="1" max="25" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-full appearance-none" />
        </div>
      </div>
    </div>
  );
};

// --- 行业分析地图 ---
export const SectorMapViz = () => {
  const sectors = [
    { name: '科技', val: 2.5, color: 'bg-rose-500' },
    { name: '消费', val: 0.8, color: 'bg-rose-400' },
    { name: '金融', val: -1.2, color: 'bg-emerald-500' },
    { name: '能源', val: 1.5, color: 'bg-rose-300' },
    { name: '医疗', val: -0.5, color: 'bg-emerald-400' },
    { name: '周期', val: -2.1, color: 'bg-emerald-600' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">全行业板块热力图 (模拟)</div>
      <div className="grid grid-cols-3 gap-2">
        {sectors.map(s => (
          <div key={s.name} className={`${s.color} h-20 rounded-xl p-3 flex flex-col justify-between text-white shadow-sm transition-transform hover:scale-[1.02] cursor-default`}>
            <span className="text-xs font-bold">{s.name}</span>
            <span className="text-lg font-black">{s.val > 0 ? '+' : ''}{s.val}%</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase">
        <span>绿: 跌幅</span>
        <span>红: 涨幅</span>
      </div>
    </div>
  );
};

// --- MACD 指标模拟 ---
export const MACDViz = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-inner">
      <div className="h-32 w-full flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-end justify-between px-2 gap-0.5">
          {[20, 35, 45, 30, 15, -10, -30, -45, -20, 10, 30, 50, 40, 20].map((v, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-sm transition-all duration-700 ${v > 0 ? 'bg-rose-500/60' : 'bg-emerald-500/60'}`}
              style={{ height: `${Math.abs(v) + 50}%`, marginBottom: v > 0 ? '50%' : 'calc(50% - ' + Math.abs(v) + '%)' }}
            ></div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-700"></div>
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,60 Q25,30 50,55 T100,40" fill="none" stroke="#fbbf24" strokeWidth="2" className="animate-pulse" />
          <path d="M0,70 Q25,40 50,65 T100,50" fill="none" stroke="#6366f1" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400">
        <span className="flex items-center"><span className="w-2 h-2 bg-indigo-500 mr-1 rounded-full"></span> DIF 快线</span>
        <span className="flex items-center"><span className="w-2 h-2 bg-amber-400 mr-1 rounded-full"></span> DEA 慢线</span>
        <span className="flex items-center">柱状线: 动能</span>
      </div>
    </div>
  );
};

// --- KDJ/RSI 指标模拟 ---
export const KDJRSIViz = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-end h-32 space-x-2 mb-6 bg-slate-50 p-2 rounded-lg">
        {[40, 55, 45, 60, 75, 92, 70, 40, 25, 15, 30].map((h, i) => (
          <div key={i} className="flex-1 group relative">
            <div 
              className={`w-full rounded-t transition-all duration-500 ${h > 80 ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : h < 20 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-indigo-400'}`} 
              style={{ height: `${h}%` }}
            ></div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded">
              {h}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 text-[10px] font-black tracking-widest uppercase">
        <div className="text-emerald-500 border-l-2 border-emerald-500 pl-2">20 超卖</div>
        <div className="text-slate-400 text-center">50 强弱</div>
        <div className="text-rose-500 text-right border-r-2 border-rose-500 pr-2">80 超买</div>
      </div>
      <p className="text-[10px] text-center mt-6 text-slate-400 leading-relaxed font-medium">
        J线进入 <span className="text-rose-600">80</span> 表示极度亢奋，应警惕回调；进入 <span className="text-emerald-600">20</span> 表示极度悲观。
      </p>
    </div>
  );
};

// --- 美林时钟 ---
export const MerrillClockVisual = () => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center">
    <div className="relative w-56 h-56 bg-slate-50 rounded-full border-[8px] border-white shadow-xl flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 text-center">
        <div className="bg-rose-50/50 flex flex-col items-center justify-center p-4">
          <span className="text-[11px] font-black text-rose-600">复苏</span>
          <span className="text-[9px] text-rose-400 mt-1">配置: 股票</span>
        </div>
        <div className="bg-amber-50/50 flex flex-col items-center justify-center p-4 border-l border-white">
          <span className="text-[11px] font-black text-amber-600">过热</span>
          <span className="text-[9px] text-amber-400 mt-1">配置: 商品</span>
        </div>
        <div className="bg-blue-50/50 flex flex-col items-center justify-center p-4 border-t border-white">
          <span className="text-[11px] font-black text-blue-600">衰退</span>
          <span className="text-[9px] text-blue-400 mt-1">配置: 债券</span>
        </div>
        <div className="bg-slate-100/50 flex flex-col items-center justify-center p-4 border-l border-t border-white">
          <span className="text-[11px] font-black text-slate-600">滞胀</span>
          <span className="text-[9px] text-slate-400 mt-1">配置: 现金</span>
        </div>
      </div>
      <div className="absolute w-1 h-24 bg-slate-800 rounded-full origin-bottom -translate-y-12 animate-[spin_12s_linear_infinite]">
        <div className="w-3 h-3 bg-slate-800 rounded-full absolute -top-1 left-1/2 -translate-x-1/2 shadow-lg"></div>
      </div>
      <div className="absolute w-4 h-4 bg-white rounded-full shadow-md z-10 border border-slate-100"></div>
    </div>
    <div className="mt-8 text-center">
      <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Merrill Lynch Clock</h4>
      <p className="text-[10px] text-slate-400">经济周期的“春夏秋冬”轮转</p>
    </div>
  </div>
);

// --- 资产配置饼图 ---
export const PortfolioPieVisual = () => (
  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-around gap-8">
    <div className="relative w-40 h-40">
      <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90">
        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#6366f1" strokeWidth="32" strokeDasharray="50 100" />
        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#fbbf24" strokeWidth="32" strokeDasharray="30 100" strokeDashoffset="-50" />
        <circle r="16" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="32" strokeDasharray="20 100" strokeDashoffset="-80" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
          <span className="text-xs font-black text-slate-800">平衡型</span>
          <span className="text-[8px] text-slate-400 mt-1">组合示例</span>
        </div>
      </div>
    </div>
    <div className="space-y-4 w-full md:w-auto">
      <div className="flex items-center justify-between space-x-8">
        <div className="flex items-center"><span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span> <span className="text-xs font-bold text-slate-700">股票指数 (ETF)</span></div>
        <span className="text-xs font-black text-slate-900">50%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"><span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span> <span className="text-xs font-bold text-slate-700">债券基金</span></div>
        <span className="text-xs font-black text-slate-900">30%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"><span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span> <span className="text-xs font-bold text-slate-700">现金/余额宝</span></div>
        <span className="text-xs font-black text-slate-900">20%</span>
      </div>
    </div>
  </div>
);

// --- 布林带模拟 ---
export const BollBandsVisual = () => (
  <div className="h-48 bg-slate-900 rounded-3xl relative overflow-hidden flex flex-col p-6 shadow-2xl">
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-[10px] font-black text-indigo-400 tracking-widest uppercase">Bollinger Bands (20, 2)</h4>
      <div className="flex space-x-4">
         <span className="text-[8px] text-rose-400 font-bold flex items-center"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-1"></span> 卖点</span>
         <span className="text-[8px] text-emerald-400 font-bold flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></span> 买点</span>
      </div>
    </div>
    <div className="flex-1 relative">
      <svg viewBox="0 0 300 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
        <path d="M0 30 Q 75 10, 150 40 T 300 20 L 300 80 Q 225 60, 150 90 T 0 70 Z" fill="rgba(99, 102, 241, 0.1)" />
        <path d="M0 30 Q 75 10, 150 40 T 300 20" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M0 70 Q 75 50, 150 80 T 300 60" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M0 50 Q 75 30, 150 60 T 300 40" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
        <path d="M0 55 L 30 40 L 60 75 L 90 20 L 120 45 L 150 85 L 180 50 L 210 35 L 240 65 L 270 15 L 300 40" fill="none" stroke="#fff" strokeWidth="1.5" className="animate-pulse" />
        <circle cx="90" cy="20" r="3" fill="#ef4444" className="animate-bounce" />
        <circle cx="150" cy="85" r="3" fill="#10b981" />
        <circle cx="270" cy="15" r="3" fill="#ef4444" className="animate-bounce" />
      </svg>
    </div>
    <p className="text-[8px] text-slate-500 text-center mt-4">股价在带宽内呈正态分布，触碰边缘通常预示均值回归。</p>
  </div>
);

export const FeeCalcVisual = () => {
  const [amount, setAmount] = useState(10000);
  const commission = Math.max(5, amount * 0.00025);
  const tax = amount * 0.0005; 
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="mb-6">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">模拟交易金额 (CNY)</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">¥</span>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(parseInt(e.target.value) || 0)} 
            className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-lg font-black text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" 
          />
        </div>
      </div>
      <div className="space-y-3 bg-slate-50/50 p-4 rounded-xl">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500 font-medium">券商佣金 (0.025% · 5元起)</span> 
          <span className="font-bold text-slate-800">¥{commission.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-500 font-medium">国家印花税 (0.05% · 仅卖出)</span> 
          <span className="font-bold text-slate-800">¥{tax.toFixed(2)}</span>
        </div>
        <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs font-black text-indigo-600 uppercase">总交易摩擦</span> 
          <span className="text-xl font-black text-indigo-600">¥{(commission + tax).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export const RiskMeterVisual = () => {
  const [risk, setRisk] = useState(30);
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center shadow-sm">
      <div className="relative w-48 h-24 overflow-hidden mb-6">
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-slate-50"></div>
        <div 
          className={`absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] transition-all duration-700 ${risk > 70 ? 'border-rose-500' : risk > 40 ? 'border-amber-400' : 'border-emerald-400'}`} 
          style={{ clipPath: `inset(0 0 50% 0)`, transform: `rotate(${(risk * 1.8) - 90}deg)` }}
        ></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-4xl font-black text-slate-900">{risk}%</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">风险系数</span>
        </div>
      </div>
      <input 
        type="range" 
        min="0" max="100" 
        value={risk} 
        onChange={(e) => setRisk(parseInt(e.target.value))} 
        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-slate-900" 
      />
    </div>
  );
};

export const OrderBookVisual = () => (
  <div className="bg-slate-900 p-6 rounded-2xl font-mono shadow-2xl overflow-hidden border border-slate-800">
    <div className="text-[10px] text-slate-500 mb-4 border-b border-slate-800 pb-2 flex justify-between">
      <span>深度盘口 (L1)</span>
      <span className="text-emerald-400">实时更新 ●</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-rose-400">
        <span>卖一 10.51</span>
        <span className="font-bold">400</span>
      </div>
      <div className="py-4 text-center">
        <div className="text-3xl font-black text-white tracking-tighter">10.50</div>
      </div>
      <div className="flex justify-between text-xs text-emerald-400">
        <span>买一 10.49</span>
        <span className="font-bold">620</span>
      </div>
    </div>
  </div>
);

export const VolumeChartVisual = () => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 h-48 flex flex-col">
    <div className="flex-1 flex items-end space-x-2">
      {[20, 35, 60, 25, 45, 95, 40, 55, 30].map((h, i) => (
        <div key={i} className={`flex-1 rounded-t ${h > 80 ? 'bg-rose-500' : 'bg-slate-200'}`} style={{ height: `${h}%` }}></div>
      ))}
    </div>
  </div>
);

export const MoatRadarVisual = () => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-center">
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <polygon points="50,15 85,50 50,85 15,50" fill="rgba(99, 102, 241, 0.4)" stroke="#6366f1" strokeWidth="1" />
      </svg>
      <div className="absolute top-0 text-[10px] font-black text-slate-800">品牌</div>
      <div className="absolute right-0 text-[10px] font-black text-slate-800">转换成本</div>
      <div className="absolute bottom-0 text-[10px] font-black text-slate-800">网络效应</div>
      <div className="absolute left-0 text-[10px] font-black text-slate-800">成本优势</div>
    </div>
  </div>
);

export const CognitiveBiasVisual = () => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 flex justify-around items-center">
    <i className="fa-solid fa-face-frown text-3xl text-rose-500"></i>
    <i className="fa-solid fa-users-rays text-3xl text-indigo-500"></i>
    <i className="fa-solid fa-anchor text-3xl text-amber-500"></i>
  </div>
);

export const InterestRateSeesawVisual = () => {
  const [rate, setRate] = useState(50);
  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
      <div className="w-full h-2 bg-slate-900 rounded-full relative" style={{ transform: `rotate(${(rate - 50) * 0.5}deg)` }}></div>
      <input type="range" value={rate} onChange={e => setRate(Number(e.target.value))} className="mt-8 w-full accent-amber-500" />
    </div>
  );
};

export const PECalculator = () => {
  const [p, setP] = useState(10);
  const [e, setE] = useState(0.5);
  const pe = e === 0 ? 0 : p / e;
  return (
    <div className="bg-slate-900 p-8 rounded-3xl text-white">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="number" value={p} onChange={x => setP(Number(x.target.value))} className="bg-slate-800 p-3 rounded-xl" placeholder="股价" />
        <input type="number" value={e} onChange={x => setE(Number(x.target.value))} className="bg-slate-800 p-3 rounded-xl" placeholder="EPS" />
      </div>
      <div className="text-center text-4xl font-black">{pe.toFixed(1)} 倍</div>
    </div>
  );
};

export const PositionSimulator = () => {
  const [total, setTotal] = useState(100000);
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200">
      <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 rounded-2xl text-2xl font-black mb-4" />
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-indigo-50 p-2 rounded">底仓 30%: {Math.round(total*0.3)}</div>
        <div className="bg-emerald-50 p-2 rounded">加仓 30%: {Math.round(total*0.3)}</div>
        <div className="bg-amber-50 p-2 rounded">机动 40%: {Math.round(total*0.4)}</div>
      </div>
    </div>
  );
};

export const KlineQuizVisual = () => (
  <div className="bg-slate-900 p-8 rounded-3xl text-center text-white">
    <i className="fa-solid fa-chart-line text-4xl mb-4 text-indigo-400"></i>
    <p className="text-xs">K线动态识别挑战 (开发中)</p>
  </div>
);

export const MALinesVisual = () => (
  <div className="h-40 bg-white rounded-3xl border border-slate-100 flex items-center justify-center">
    <svg viewBox="0 0 200 80" className="w-full h-full p-4">
      <path d="M0 65 Q 50 60, 100 40 T 200 20" fill="none" stroke="#6366f1" strokeWidth="2" />
      <path d="M0 70 Q 100 70, 200 50" fill="none" stroke="#fbbf24" strokeWidth="2" />
    </svg>
  </div>
);

export const ThreeStatementsVisual = () => (
  <div className="grid grid-cols-3 gap-4 h-32">
    <div className="bg-indigo-50 rounded-xl p-2 text-[8px] font-bold">资产负债</div>
    <div className="bg-emerald-50 rounded-xl p-2 text-[8px] font-bold">利润表</div>
    <div className="bg-amber-50 rounded-xl p-2 text-[8px] font-bold">现金流</div>
  </div>
);
