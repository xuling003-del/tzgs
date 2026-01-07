
import React from 'react';

// --- 心态：认知避坑 ---
export const CognitiveBiasVisual = () => (
  <div className="bg-slate-50 p-6 rounded-2xl my-6 border border-slate-200">
    <div className="flex justify-around items-center">
      <div className="text-center group">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-2 transition-transform group-hover:scale-110">
          <i className="fa-solid fa-face-frown text-2xl"></i>
        </div>
        <div className="text-[10px] font-bold">损失厌恶</div>
        <div className="text-[8px] text-slate-400 mt-1">亏100比赚100痛</div>
      </div>
      <div className="h-px w-12 bg-slate-200"></div>
      <div className="text-center group">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 mb-2 transition-transform group-hover:scale-110">
          <i className="fa-solid fa-users text-2xl"></i>
        </div>
        <div className="text-[10px] font-bold">羊群效应</div>
        <div className="text-[8px] text-slate-400 mt-1">别人买我也买</div>
      </div>
      <div className="h-px w-12 bg-slate-200"></div>
      <div className="text-center group">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-2 transition-transform group-hover:scale-110">
          <i className="fa-solid fa-anchor text-2xl"></i>
        </div>
        <div className="text-[10px] font-bold">锚定效应</div>
        <div className="text-[8px] text-slate-400 mt-1">死守过去的旧价格</div>
      </div>
    </div>
  </div>
);

export const TradingFrameworkVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-blue-50">
    <div className="text-sm font-bold text-blue-700 mb-4">交易系统六大核心要素</div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3 bg-blue-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs font-bold">1</div>
          <div className="text-xs font-bold text-blue-700">市场选择</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 交易品种</div>
          <div>• 交易周期</div>
          <div>• 流动性分析</div>
        </div>
      </div>
      <div className="p-3 bg-purple-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs font-bold">2</div>
          <div className="text-xs font-bold text-purple-700">交易理念</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 趋势跟踪</div>
          <div>• 价值投资</div>
          <div>• 技术分析</div>
        </div>
      </div>
      <div className="p-3 bg-emerald-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold">3</div>
          <div className="text-xs font-bold text-emerald-700">入场规则</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 技术信号</div>
          <div>• 基本面条件</div>
          <div>• 时机选择</div>
        </div>
      </div>
      <div className="p-3 bg-amber-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold">4</div>
          <div className="text-xs font-bold text-amber-700">出场规则</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 止盈策略</div>
          <div>• 止损策略</div>
          <div>• 仓位管理</div>
        </div>
      </div>
      <div className="p-3 bg-red-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-bold">5</div>
          <div className="text-xs font-bold text-red-700">风险控制</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 单笔风险 {'<'}2%</div>
          <div>• 总风险控制</div>
          <div>• 回撤控制</div>
        </div>
      </div>
      <div className="p-3 bg-indigo-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 text-xs font-bold">6</div>
          <div className="text-xs font-bold text-indigo-700">资金管理</div>
        </div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 仓位分配</div>
          <div>• 资金曲线</div>
          <div>• 交易频率</div>
        </div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
      <div className="text-[10px] font-bold text-blue-600">💡 核心原则</div>
      <div className="text-[9px] text-slate-600 mt-1">简单、明确、可重复是优秀交易系统的特点</div>
    </div>
  </div>
);

export const EntryExitRulesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-emerald-50">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="text-sm font-bold text-emerald-700 mb-3">入场规则</div>
        <div className="space-y-2">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <div className="text-[10px] font-bold text-emerald-600 mb-1">技术面入场</div>
            <div className="text-[9px] text-slate-600">突破、回调、形态、指标</div>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg">
            <div className="text-[10px] font-bold text-blue-600 mb-1">基本面入场</div>
            <div className="text-[9px] text-slate-600">估值、成长、事件</div>
          </div>
          <div className="p-2 bg-purple-50 rounded-lg">
            <div className="text-[10px] font-bold text-purple-600 mb-1">情绪面入场</div>
            <div className="text-[9px] text-slate-600">恐慌、热点、资金</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm font-bold text-amber-700 mb-3">出场规则</div>
        <div className="space-y-2">
          <div className="p-2 bg-amber-50 rounded-lg">
            <div className="text-[10px] font-bold text-amber-600 mb-1">止盈策略</div>
            <div className="text-[9px] text-slate-600">目标价、时间、移动、技术</div>
          </div>
          <div className="p-2 bg-red-50 rounded-lg">
            <div className="text-[10px] font-bold text-red-600 mb-1">止损策略</div>
            <div className="text-[9px] text-slate-600">固定、波动、技术、时间</div>
          </div>
          <div className="p-2 bg-indigo-50 rounded-lg">
            <div className="text-[10px] font-bold text-indigo-600 mb-1">仓位调整</div>
            <div className="text-[9px] text-slate-600">盈利加仓、亏损减仓</div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
      <div className="text-[10px] font-bold text-emerald-600">⚡ 执行原则</div>
      <div className="text-[9px] text-slate-600 mt-1">入场可以慢，出场必须快</div>
    </div>
  </div>
);

export const BacktestingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-purple-50">
    <div className="text-sm font-bold text-purple-700 mb-4">回测关键指标</div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="p-3 bg-emerald-50 rounded-xl text-center">
        <div className="text-[9px] text-slate-600 mb-1">年化收益率</div>
        <div className="text-xs font-bold text-emerald-700">{'>'}15%</div>
      </div>
      <div className="p-3 bg-blue-50 rounded-xl text-center">
        <div className="text-[9px] text-slate-600 mb-1">夏普比率</div>
        <div className="text-xs font-bold text-blue-700">{'>'}1.0</div>
      </div>
      <div className="p-3 bg-amber-50 rounded-xl text-center">
        <div className="text-[9px] text-slate-600 mb-1">最大回撤</div>
        <div className="text-xs font-bold text-amber-700">{'<'}20%</div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 mb-4">
      <div className="p-2 bg-purple-50 rounded-lg text-center">
        <div className="text-[9px] text-slate-600">胜率</div>
        <div className="text-[10px] font-bold text-purple-700">45-55%</div>
      </div>
      <div className="p-2 bg-pink-50 rounded-lg text-center">
        <div className="text-[9px] text-slate-600">盈亏比</div>
        <div className="text-[10px] font-bold text-pink-700">{'>'}2:1</div>
      </div>
      <div className="p-2 bg-indigo-50 rounded-lg text-center">
        <div className="text-[9px] text-slate-600">盈利因子</div>
        <div className="text-[10px] font-bold text-indigo-700">{'>'}1.5</div>
      </div>
      <div className="p-2 bg-red-50 rounded-lg text-center">
        <div className="text-[9px] text-slate-600">交易频率</div>
        <div className="text-[10px] font-bold text-red-700">适中</div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="p-2 bg-purple-100 rounded-lg">
        <div className="text-[10px] font-bold text-purple-600">📊 回测注意事项</div>
        <div className="text-[9px] text-slate-600 mt-1">• 至少5年历史数据 • 考虑交易成本 • 避免过度拟合</div>
      </div>
    </div>
  </div>
);

export const SystemOptimizationVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="text-sm font-bold text-indigo-700 mb-4">系统优化的三个层次</div>
    <div className="space-y-3">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold flex-shrink-0">1</div>
        <div className="flex-1 p-3 bg-emerald-50 rounded-xl">
          <div className="text-xs font-bold text-emerald-700 mb-1">参数优化</div>
          <div className="text-[9px] text-slate-600">调整技术指标参数、仓位管理规则、风险控制参数</div>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs font-bold flex-shrink-0">2</div>
        <div className="flex-1 p-3 bg-blue-50 rounded-xl">
          <div className="text-xs font-bold text-blue-700 mb-1">规则优化</div>
          <div className="text-[9px] text-slate-600">增加入场条件、改进出场策略、完善风控规则</div>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs font-bold flex-shrink-0">3</div>
        <div className="flex-1 p-3 bg-purple-50 rounded-xl">
          <div className="text-xs font-bold text-purple-700 mb-1">理念优化</div>
          <div className="text-[9px] text-slate-600">重新审视交易理念、调整市场选择、改变交易周期</div>
        </div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-indigo-100 rounded-lg">
      <div className="text-[10px] font-bold text-indigo-600">⚠️ 优化原则</div>
      <div className="text-[9px] text-slate-600 mt-1">一次只优化一个要素 • 充分测试后再应用 • 保持系统简洁性</div>
    </div>
  </div>
);

export const QuantBasicsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-cyan-50">
    <div className="text-sm font-bold text-cyan-700 mb-4">量化投资基本流程</div>
    <div className="flex items-center justify-between mb-4">
      <div className="text-center w-1/5">
        <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center text-cyan-700 text-sm font-bold mx-auto mb-2">1</div>
        <div className="text-[10px] font-bold text-cyan-700">数据获取</div>
        <div className="text-[9px] text-slate-600 mt-1">行情、财务、宏观数据</div>
      </div>
      <div className="text-2xl text-cyan-300">→</div>
      <div className="text-center w-1/5">
        <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-sm font-bold mx-auto mb-2">2</div>
        <div className="text-[10px] font-bold text-emerald-700">因子挖掘</div>
        <div className="text-[9px] text-slate-600 mt-1">寻找预测收益的因子</div>
      </div>
      <div className="text-2xl text-emerald-300">→</div>
      <div className="text-center w-1/5">
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-sm font-bold mx-auto mb-2">3</div>
        <div className="text-[10px] font-bold text-blue-700">策略构建</div>
        <div className="text-[9px] text-slate-600 mt-1">选股、择时、仓位管理</div>
      </div>
      <div className="text-2xl text-blue-300">→</div>
      <div className="text-center w-1/5">
        <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-sm font-bold mx-auto mb-2">4</div>
        <div className="text-[10px] font-bold text-purple-700">回测验证</div>
        <div className="text-[9px] text-slate-600 mt-1">历史回测、模拟交易</div>
      </div>
      <div className="text-2xl text-purple-300">→</div>
      <div className="text-center w-1/5">
        <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-sm font-bold mx-auto mb-2">5</div>
        <div className="text-[10px] font-bold text-amber-700">实盘执行</div>
        <div className="text-[9px] text-slate-600 mt-1">自动交易、实时监控</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 bg-cyan-50 rounded-xl">
        <div className="text-[10px] font-bold text-cyan-600 mb-2">量化投资优势</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>✓ 克服人性弱点</div>
          <div>✓ 处理海量数据</div>
          <div>✓ 快速执行</div>
          <div>✓ 可回测验证</div>
        </div>
      </div>
      <div className="p-3 bg-emerald-50 rounded-xl">
        <div className="text-[10px] font-bold text-emerald-600 mb-2">数据类型</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 行情数据</div>
          <div>• 财务数据</div>
          <div>• 宏观数据</div>
          <div>• 另类数据</div>
        </div>
      </div>
    </div>
  </div>
);

export const FactorModelVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-teal-50">
    <div className="text-sm font-bold text-teal-700 mb-4">常见量化因子分类</div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="p-3 bg-emerald-50 rounded-xl">
        <div className="text-[10px] font-bold text-emerald-600 mb-2">价值因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• PE、PB、PS</div>
          <div>• 股息率</div>
        </div>
      </div>
      <div className="p-3 bg-blue-50 rounded-xl">
        <div className="text-[10px] font-bold text-blue-600 mb-2">成长因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 营收增长率</div>
          <div>• 净利润增长率</div>
          <div>• ROE、ROA</div>
        </div>
      </div>
      <div className="p-3 bg-purple-50 rounded-xl">
        <div className="text-[10px] font-bold text-purple-600 mb-2">质量因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 资产负债率</div>
          <div>• 现金流比率</div>
          <div>• 毛利率、净利率</div>
        </div>
      </div>
      <div className="p-3 bg-amber-50 rounded-xl">
        <div className="text-[10px] font-bold text-amber-600 mb-2">动量因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 3/6个月涨幅</div>
          <div>• 相对强弱</div>
          <div>• 成交量放大</div>
        </div>
      </div>
      <div className="p-3 bg-pink-50 rounded-xl">
        <div className="text-[10px] font-bold text-pink-600 mb-2">技术因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• RSI、MACD</div>
          <div>• 均线排列</div>
          <div>• 波动率</div>
        </div>
      </div>
      <div className="p-3 bg-indigo-50 rounded-xl">
        <div className="text-[10px] font-bold text-indigo-600 mb-2">情绪因子</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 分析师评级</div>
          <div>• 机构持仓</div>
          <div>• 舆情指数</div>
        </div>
      </div>
    </div>
    <div className="p-3 bg-teal-100 rounded-lg">
      <div className="text-[10px] font-bold text-teal-600">💡 多因子模型构建</div>
      <div className="text-[9px] text-slate-600 mt-1">因子选择 → 因子打分 → 组合构建 → 风险控制</div>
    </div>
  </div>
);

export const AlgorithmTradingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-violet-50">
    <div className="text-sm font-bold text-violet-700 mb-4">算法交易类型</div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="p-3 bg-emerald-50 rounded-xl">
        <div className="text-[10px] font-bold text-emerald-600 mb-2">执行算法</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• TWAP：时间加权</div>
          <div>• VWAP：成交量加权</div>
          <div>• POV：比例成交</div>
        </div>
      </div>
      <div className="p-3 bg-blue-50 rounded-xl">
        <div className="text-[10px] font-bold text-blue-600 mb-2">策略算法</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 套利算法</div>
          <div>• 趋势算法</div>
          <div>• 做市算法</div>
        </div>
      </div>
      <div className="p-3 bg-purple-50 rounded-xl">
        <div className="text-[10px] font-bold text-purple-600 mb-2">高频交易</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 毫秒级速度</div>
          <div>• 微小价差</div>
          <div>• 低延迟系统</div>
        </div>
      </div>
    </div>
    <div className="text-sm font-bold text-violet-700 mb-3">算法交易实现流程</div>
    <div className="flex items-center justify-between mb-4">
      <div className="text-center w-1/4">
        <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center text-violet-700 text-xs font-bold mx-auto mb-1">1</div>
        <div className="text-[10px] font-bold text-violet-700">策略开发</div>
      </div>
      <div className="text-xl text-violet-300">→</div>
      <div className="text-center w-1/4">
        <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold mx-auto mb-1">2</div>
        <div className="text-[10px] font-bold text-emerald-700">系统搭建</div>
      </div>
      <div className="text-xl text-emerald-300">→</div>
      <div className="text-center w-1/4">
        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs font-bold mx-auto mb-1">3</div>
        <div className="text-[10px] font-bold text-blue-700">风险控制</div>
      </div>
      <div className="text-xl text-blue-300">→</div>
      <div className="text-center w-1/4">
        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs font-bold mx-auto mb-1">4</div>
        <div className="text-[10px] font-bold text-purple-700">实盘运行</div>
      </div>
    </div>
    <div className="p-3 bg-violet-100 rounded-lg">
      <div className="text-[10px] font-bold text-violet-600">⚠️ 算法交易风险</div>
      <div className="text-[9px] text-slate-600 mt-1">技术故障 • 策略失效 • 极端事件 • 监管风险</div>
    </div>
  </div>
);

// --- 财报：三剑客 ---
export const ThreeStatementsVisual = () => (
  <div className="grid grid-cols-3 gap-3 my-6">
    <div className="bg-white p-4 rounded-xl border-2 border-indigo-50 shadow-sm text-center">
      <div className="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
        <i className="fa-solid fa-vault"></i>
      </div>
      <div className="text-xs font-bold text-slate-800">资产负债</div>
      <div className="text-[9px] text-slate-400 mt-1">底子: 欠钱没?</div>
    </div>
    <div className="bg-white p-4 rounded-xl border-2 border-emerald-50 shadow-sm text-center">
      <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
        <i className="fa-solid fa-sack-dollar"></i>
      </div>
      <div className="text-xs font-bold text-slate-800">利润表</div>
      <div className="text-[9px] text-slate-400 mt-1">面子: 赚多没?</div>
    </div>
    <div className="bg-white p-4 rounded-xl border-2 border-amber-50 shadow-sm text-center">
      <div className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
        <i className="fa-solid fa-water"></i>
      </div>
      <div className="text-xs font-bold text-slate-800">现金流</div>
      <div className="text-[9px] text-slate-400 mt-1">日子: 钱在没?</div>
    </div>
  </div>
);

// --- 宏观：利率跷跷板 ---
export const InterestRateSeesawVisual = () => (
  <div className="bg-slate-50 p-8 rounded-2xl my-6 border border-slate-200">
    <div className="relative h-24 flex items-center justify-center">
      <div className="absolute w-full h-1 bg-slate-300 transform rotate-[15deg] origin-center"></div>
      <div className="absolute left-10 -top-4 text-center">
        <div className="bg-red-500 text-white p-2 rounded-lg shadow-lg">
          <i className="fa-solid fa-percent mr-1"></i> 利率上升
        </div>
      </div>
      <div className="absolute right-10 top-8 text-center">
        <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg border border-emerald-200">
          <i className="fa-solid fa-chart-line mr-1"></i> 股价下跌
        </div>
      </div>
      <div className="w-6 h-6 bg-slate-400 rounded-full mt-12"></div>
    </div>
    <p className="text-[9px] text-slate-400 text-center mt-4 italic">
      "当银行利息变高，股市的吸引力自然下降。"
    </p>
  </div>
);

// --- 策略：盈亏比 ---
export const RiskRewardRatioVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50 relative overflow-hidden">
    <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-red-600 mb-2">
          <i className="fa-solid fa-arrow-down"></i> 1
        </div>
        <div className="text-[10px] font-bold">潜在亏损</div>
      </div>
      <div className="text-slate-300 text-2xl font-light">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-emerald-600 mb-2 px-6">
          <i className="fa-solid fa-arrow-up"></i> 3+
        </div>
        <div className="text-[10px] font-bold">目标盈利</div>
      </div>
    </div>
    <div className="mt-6 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-indigo-500 w-3/4"></div>
    </div>
    <div className="flex justify-between text-[8px] text-slate-400 mt-2">
      <span>高胜率不如高盈亏比</span>
      <span>3:1 是入场生死线</span>
    </div>
  </div>
);

// --- 增强版：仓位管理“弹药库” ---
export const PositionVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-100 shadow-inner">
    <div className="flex flex-col items-center space-y-4">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">3-3-4 弹药分配示意图</div>
      <div className="flex items-end justify-center space-x-2 w-full max-w-xs h-40">
        <div className="group relative flex flex-col items-center flex-1">
          <div className="bg-indigo-300 w-full h-12 rounded-t-lg transition-all group-hover:bg-indigo-400 flex items-center justify-center">
            <i className="fa-solid fa-person-running text-white text-xs"></i>
          </div>
          <div className="text-[10px] mt-2 font-bold text-indigo-600">30% 侦察兵</div>
        </div>
        <div className="group relative flex flex-col items-center flex-1">
          <div className="bg-indigo-500 w-full h-12 rounded-t-lg transition-all group-hover:bg-indigo-600 flex items-center justify-center">
            <i className="fa-solid fa-shield-halved text-white text-xs"></i>
          </div>
          <div className="text-[10px] mt-2 font-bold text-indigo-700">30% 援军</div>
        </div>
        <div className="group relative flex flex-col items-center flex-1">
          <div className="bg-indigo-800 w-full h-16 rounded-t-lg transition-all group-hover:bg-indigo-900 flex items-center justify-center">
            <i className="fa-solid fa-crown text-white text-xs"></i>
          </div>
          <div className="text-[10px] mt-2 font-bold text-indigo-900">40% 王牌军</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 其他占位组件 ---
export const KlineVisual = () => <div className="p-10 text-center bg-slate-900 rounded-xl text-white">K线可视化加载中...</div>;
export const MALinesVisual = () => <div className="p-10 text-center bg-slate-900 rounded-xl text-white">均线可视化加载中...</div>;

// --- 股市通行证：股票类型 ---
export const StockTypesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center p-4 bg-indigo-50 rounded-xl">
        <div className="w-12 h-12 bg-indigo-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
          <i className="fa-solid fa-flag"></i>
        </div>
        <div className="text-xs font-bold text-indigo-700">普通股</div>
        <div className="text-[9px] text-indigo-500 mt-1">分红+投票权</div>
      </div>
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700">优先股</div>
        <div className="text-[9px] text-emerald-500 mt-1">优先分红</div>
      </div>
      <div className="text-center p-4 bg-amber-50 rounded-xl">
        <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
          <i className="fa-solid fa-globe"></i>
        </div>
        <div className="text-xs font-bold text-amber-700">市场选择</div>
        <div className="text-[9px] text-amber-500 mt-1">A股/港股/美股</div>
      </div>
    </div>
  </div>
);

// --- 股市通行证：交易机制 ---
export const TradingMechanismVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="flex justify-around items-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-2">
          <i className="fa-solid fa-calendar-day text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">T+1 交易</div>
        <div className="text-[9px] text-slate-400 mt-1">今天买明天卖</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-2">
          <i className="fa-solid fa-clock text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">交易时间</div>
        <div className="text-[9px] text-slate-400 mt-1">9:30-11:30</div>
        <div className="text-[9px] text-slate-400">13:00-15:00</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-2">
          <i className="fa-solid fa-arrows-up-down text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">涨跌幅限制</div>
        <div className="text-[9px] text-slate-400 mt-1">主板±10%</div>
        <div className="text-[9px] text-slate-400">创业板±20%</div>
      </div>
    </div>
  </div>
);

// --- 股市通行证：账户权限 ---
export const AccountPermissionsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-indigo-500 text-white rounded flex items-center justify-center mr-3">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-indigo-700">普通账户</div>
            <div className="text-[9px] text-indigo-500">主板、创业板</div>
          </div>
        </div>
        <div className="text-[9px] text-slate-400">2年交易经验</div>
      </div>
      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center mr-3">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-700">科创板权限</div>
            <div className="text-[9px] text-emerald-500">科创板股票</div>
          </div>
        </div>
        <div className="text-[9px] text-slate-400">50万+2年</div>
      </div>
      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center mr-3">
            <i className="fa-solid fa-coins"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-amber-700">融资融券</div>
            <div className="text-[9px] text-amber-500">杠杆交易</div>
          </div>
        </div>
        <div className="text-[9px] text-slate-400">50万+6个月</div>
      </div>
    </div>
  </div>
);

// --- 股市通行证：费用结构 ---
export const FeeStructureVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center p-4 bg-red-50 rounded-xl">
        <div className="text-lg font-bold text-red-600 mb-1">佣金</div>
        <div className="text-[9px] text-red-400">万分之2.5-5</div>
        <div className="text-[8px] text-slate-400 mt-1">买卖双向收取</div>
      </div>
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="text-lg font-bold text-emerald-600 mb-1">印花税</div>
        <div className="text-[9px] text-emerald-400">万分之5</div>
        <div className="text-[8px] text-slate-400 mt-1">仅卖出收取</div>
      </div>
      <div className="text-center p-4 bg-amber-50 rounded-xl">
        <div className="text-lg font-bold text-amber-600 mb-1">过户费</div>
        <div className="text-[9px] text-amber-400">万分之0.1</div>
        <div className="text-[8px] text-slate-400 mt-1">双向收取</div>
      </div>
      <div className="text-center p-4 bg-indigo-50 rounded-xl">
        <div className="text-lg font-bold text-indigo-600 mb-1">规费</div>
        <div className="text-[9px] text-indigo-400">万分之0.687</div>
        <div className="text-[8px] text-slate-400 mt-1">双向收取</div>
      </div>
    </div>
  </div>
);

// --- 股市通行证：订单类型 ---
export const OrderTypesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="space-y-3">
      <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
        <div className="w-8 h-8 bg-indigo-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-indigo-700">市价单</div>
          <div className="text-[9px] text-indigo-500">立即成交，价格不确定</div>
        </div>
      </div>
      <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
        <div className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-tag"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-emerald-700">限价单</div>
          <div className="text-[9px] text-emerald-500">指定价格，可能不成交</div>
        </div>
      </div>
      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
        <div className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-stopwatch"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-amber-700">条件单</div>
          <div className="text-[9px] text-amber-500">触发条件后自动下单</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 股市通行证：市场参与者 ---
export const MarketParticipantsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="flex justify-around items-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 mb-2">
          <i className="fa-solid fa-user-tie text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">机构</div>
        <div className="text-[9px] text-slate-400 mt-1">基金、保险</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-2">
          <i className="fa-solid fa-building-columns text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">QFII</div>
        <div className="text-[9px] text-slate-400 mt-1">外资机构</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-2">
          <i className="fa-solid fa-users text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">散户</div>
        <div className="text-[9px] text-slate-400 mt-1">个人投资者</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：K线形态 ---
export const KlinePatternsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-4 gap-3">
      <div className="text-center">
        <div className="w-12 h-16 bg-red-500 rounded mx-auto mb-2"></div>
        <div className="text-[10px] font-bold text-slate-700">阳线</div>
      </div>
      <div className="text-center">
        <div className="w-12 h-16 bg-emerald-500 rounded mx-auto mb-2"></div>
        <div className="text-[10px] font-bold text-slate-700">阴线</div>
      </div>
      <div className="text-center">
        <div className="w-12 h-16 bg-slate-300 rounded mx-auto mb-2 flex items-center justify-center">
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
        </div>
        <div className="text-[10px] font-bold text-slate-700">十字星</div>
      </div>
      <div className="text-center">
        <div className="w-12 h-16 bg-amber-100 rounded mx-auto mb-2 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-amber-500"></div>
        </div>
        <div className="text-[10px] font-bold text-slate-700">锤子线</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：成交量分析 ---
export const VolumeAnalysisVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="text-lg font-bold text-emerald-600 mb-1">放量上涨</div>
        <div className="text-[9px] text-emerald-400">买方力量强</div>
      </div>
      <div className="text-center p-4 bg-red-50 rounded-xl">
        <div className="text-lg font-bold text-red-600 mb-1">放量下跌</div>
        <div className="text-[9px] text-red-400">卖方力量强</div>
      </div>
      <div className="text-center p-4 bg-amber-50 rounded-xl">
        <div className="text-lg font-bold text-amber-600 mb-1">缩量上涨</div>
        <div className="text-[9px] text-amber-400">买方不足</div>
      </div>
      <div className="text-center p-4 bg-indigo-50 rounded-xl">
        <div className="text-lg font-bold text-indigo-600 mb-1">缩量下跌</div>
        <div className="text-[9px] text-indigo-400">卖方衰竭</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：MACD指标 ---
export const MACDIndicatorVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center mr-3">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-700">金叉</div>
            <div className="text-[9px] text-emerald-500">DIF上穿DEA</div>
          </div>
        </div>
        <div className="text-[9px] text-slate-400">买入信号</div>
      </div>
      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center mr-3">
            <i className="fa-solid fa-arrow-trend-down"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-red-700">死叉</div>
            <div className="text-[9px] text-red-500">DIF下穿DEA</div>
          </div>
        </div>
        <div className="text-[9px] text-slate-400">卖出信号</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：KDJ指标 ---
export const KDJIndicatorVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="flex justify-around items-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-2">
          <i className="fa-solid fa-temperature-high text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">超买区</div>
        <div className="text-[9px] text-slate-400 mt-1">KDJ {'>'} 80</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-2">
          <i className="fa-solid fa-temperature-low text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">超卖区</div>
        <div className="text-[9px] text-slate-400 mt-1">KDJ {'<'} 20</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：RSI指标 ---
export const RSIIndicatorVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="h-24 bg-gradient-to-r from-red-200 via-slate-200 to-emerald-200 rounded-lg relative">
      <div className="absolute left-1/4 top-0 bottom-0 border-l-2 border-dashed border-red-500"></div>
      <div className="absolute right-1/4 top-0 bottom-0 border-l-2 border-dashed border-emerald-500"></div>
      <div className="absolute left-1/4 top-2 text-[8px] text-red-600">80</div>
      <div className="absolute right-1/4 top-2 text-[8px] text-emerald-600">20</div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-slate-600">50</div>
    </div>
    <div className="flex justify-between text-[9px] text-slate-400 mt-2">
      <span>超买区</span>
      <span>盘整区</span>
      <span>超卖区</span>
    </div>
  </div>
);

// --- 实战技术课：趋势线与支撑压力 ---
export const TrendSupportVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="space-y-3">
      <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
        <div className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-emerald-700">上升趋势线</div>
          <div className="text-[9px] text-emerald-500">连接低点，支撑上涨</div>
        </div>
      </div>
      <div className="flex items-center p-3 bg-red-50 rounded-lg">
        <div className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-arrow-trend-down"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-red-700">下降趋势线</div>
          <div className="text-[9px] text-red-500">连接高点，压制下跌</div>
        </div>
      </div>
      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
        <div className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-arrows-up-down"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-amber-700">支撑压力转换</div>
          <div className="text-[9px] text-amber-500">突破后角色互换</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：形态分析 ---
export const PatternAnalysisVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center p-4 bg-red-50 rounded-xl">
        <div className="text-lg font-bold text-red-600 mb-1">头肩顶</div>
        <div className="text-[9px] text-red-400">顶部反转</div>
      </div>
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="text-lg font-bold text-emerald-600 mb-1">头肩底</div>
        <div className="text-[9px] text-emerald-400">底部反转</div>
      </div>
      <div className="text-center p-4 bg-amber-50 rounded-xl">
        <div className="text-lg font-bold text-amber-600 mb-1">双顶M头</div>
        <div className="text-[9px] text-amber-400">顶部反转</div>
      </div>
      <div className="text-center p-4 bg-indigo-50 rounded-xl">
        <div className="text-lg font-bold text-indigo-600 mb-1">双底W底</div>
        <div className="text-[9px] text-indigo-400">底部反转</div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：布林带 ---
export const BollingerBandsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="space-y-3">
      <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
        <div className="w-8 h-8 bg-emerald-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-arrows-left-right"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-emerald-700">开口</div>
          <div className="text-[9px] text-emerald-500">波动率增大，趋势启动</div>
        </div>
      </div>
      <div className="flex items-center p-3 bg-amber-50 rounded-lg">
        <div className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center mr-3">
          <i className="fa-solid fa-compress"></i>
        </div>
        <div>
          <div className="text-xs font-bold text-amber-700">收口</div>
          <div className="text-[9px] text-amber-500">波动率减小，变盘前兆</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 实战技术课：波浪理论 ---
export const WaveTheoryVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="flex items-center justify-around">
      <div className="text-center">
        <div className="flex items-end space-x-1 h-16 mb-2">
          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
          <div className="w-4 h-6 bg-emerald-500 rounded"></div>
          <div className="w-4 h-10 bg-emerald-500 rounded"></div>
          <div className="w-4 h-6 bg-emerald-500 rounded"></div>
          <div className="w-4 h-8 bg-emerald-500 rounded"></div>
        </div>
        <div className="text-xs font-bold text-emerald-700">推动浪</div>
        <div className="text-[9px] text-emerald-500">1-3-5上涨</div>
      </div>
      <div className="text-center">
        <div className="flex items-end space-x-1 h-16 mb-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <div className="w-4 h-6 bg-red-500 rounded"></div>
        </div>
        <div className="text-xs font-bold text-red-700">调整浪</div>
        <div className="text-[9px] text-red-500">2-4回调</div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：做空机制 ---
export const ShortSellingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-red-50">
    <div className="grid grid-cols-5 gap-4 items-center">
      <div className="text-center">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mx-auto mb-2">
          <i className="fa-solid fa-hand-holding-dollar text-xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">借入股票</div>
        <div className="text-[9px] text-slate-400">支付利息</div>
      </div>
      <div className="text-center text-2xl text-slate-300">→</div>
      <div className="text-center">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-2">
          <i className="fa-solid fa-arrow-trend-down text-xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">高价卖出</div>
        <div className="text-[9px] text-slate-400">获得资金</div>
      </div>
      <div className="text-center text-2xl text-slate-300">→</div>
      <div className="text-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-arrow-trend-up text-xl"></i>
        </div>
        <div className="text-xs font-bold text-slate-700">低价买回</div>
        <div className="text-[9px] text-slate-400">归还股票</div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-red-50 rounded-lg">
      <div className="text-[10px] font-bold text-red-600 mb-1">⚠️ 风险提示</div>
      <div className="text-[9px] text-slate-600">亏损无上限 | 需要保证金 | 强制平仓风险</div>
    </div>
  </div>
);

// --- 高级实战课：期权基础 ---
export const OptionsBasicsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-3">
          <i className="fa-solid fa-arrow-trend-up text-2xl"></i>
        </div>
        <div className="text-sm font-bold text-emerald-700 mb-2">看涨期权 Call</div>
        <div className="text-[10px] text-slate-600 space-y-1">
          <div>✓ 买入看涨：支付权利金</div>
          <div>✓ 盈利条件：股价上涨</div>
          <div>✓ 最大亏损：权利金</div>
          <div>✓ 最大盈利：无限</div>
        </div>
      </div>
      <div className="text-center p-4 bg-red-50 rounded-xl">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mx-auto mb-3">
          <i className="fa-solid fa-arrow-trend-down text-2xl"></i>
        </div>
        <div className="text-sm font-bold text-red-700 mb-2">看跌期权 Put</div>
        <div className="text-[10px] text-slate-600 space-y-1">
          <div>✓ 买入看跌：支付权利金</div>
          <div>✓ 盈利条件：股价下跌</div>
          <div>✓ 最大亏损：权利金</div>
          <div>✓ 最大盈利：行权价-权利金</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：期货合约 ---
export const FuturesContractsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-amber-50">
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <div className="text-xs font-bold text-blue-700 mb-1">沪深300 IF</div>
        <div className="text-[9px] text-slate-500">大盘蓝筹</div>
      </div>
      <div className="text-center p-3 bg-purple-50 rounded-lg">
        <div className="text-xs font-bold text-purple-700 mb-1">中证500 IC</div>
        <div className="text-[9px] text-slate-500">中小盘</div>
      </div>
      <div className="text-center p-3 bg-pink-50 rounded-lg">
        <div className="text-xs font-bold text-pink-700 mb-1">上证50 IH</div>
        <div className="text-[9px] text-slate-500">超大盘</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="text-xs font-bold text-slate-700 mb-2">期货特点</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• T+0交易</div>
          <div>• 双向交易</div>
          <div>• 杠杆效应 10倍</div>
          <div>• 每日无负债结算</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-bold text-slate-700 mb-2">保证金制度</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 保证金 10-15%</div>
          <div>• 合约乘数 300元/点</div>
          <div>• 到期必须交割</div>
          <div>• 强制平仓风险</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：套期保值 ---
export const HedgingStrategiesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-cyan-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="text-sm font-bold text-emerald-700 mb-3">多头套期保值</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold">1</div>
            <div className="text-[10px] text-slate-600">未来需要买入股票</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold">2</div>
            <div className="text-[10px] text-slate-600">现在买入股指期货</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold">3</div>
            <div className="text-[10px] text-slate-600">锁定买入成本</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-red-50 rounded-xl">
        <div className="text-sm font-bold text-red-700 mb-3">空头套期保值</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xs font-bold">1</div>
            <div className="text-[10px] text-slate-600">持有股票担心下跌</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xs font-bold">2</div>
            <div className="text-[10px] text-slate-600">卖出股指期货</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xs font-bold">3</div>
            <div className="text-[10px] text-slate-600">对冲下跌风险</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：套利机会 ---
export const ArbitrageOpportunitiesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-violet-50">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center p-4 bg-blue-50 rounded-xl">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-arrow-right-arrow-left text-xl"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 mb-2">期现套利</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>正向：买现货卖期货</div>
          <div>反向：卖现货买期货</div>
        </div>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-calendar-days text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 mb-2">跨期套利</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>牛市：买近卖远</div>
          <div>熊市：卖近买远</div>
        </div>
      </div>
      <div className="text-center p-4 bg-pink-50 rounded-xl">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mx-auto mb-2">
          <i className="fa-solid fa-layer-group text-xl"></i>
        </div>
        <div className="text-xs font-bold text-pink-700 mb-2">ETF套利</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>一级：申购赎回</div>
          <div>二级：买卖交易</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：板块轮动 ---
export const SectorRotationVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-teal-50">
    <div className="grid grid-cols-4 gap-3">
      <div className="text-center p-3 bg-emerald-50 rounded-lg">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-seedling text-lg"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700 mb-1">复苏期</div>
        <div className="text-[9px] text-slate-500">金融、可选消费</div>
      </div>
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-rocket text-lg"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 mb-1">扩张期</div>
        <div className="text-[9px] text-slate-500">科技、工业</div>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-2">
          <i className="fa-solid fa-fire text-lg"></i>
        </div>
        <div className="text-xs font-bold text-orange-700 mb-1">滞胀期</div>
        <div className="text-[9px] text-slate-500">能源、必需消费</div>
      </div>
      <div className="text-center p-3 bg-slate-50 rounded-lg">
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 mx-auto mb-2">
          <i className="fa-solid fa-snowflake text-lg"></i>
        </div>
        <div className="text-xs font-bold text-slate-700 mb-1">衰退期</div>
        <div className="text-[9px] text-slate-500">公用事业、医疗</div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：价值投资 ---
export const ValueInvestingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-amber-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-amber-50 rounded-xl">
        <div className="text-sm font-bold text-amber-700 mb-3">价值投资四大原则</div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">1</div>
            <div className="text-[10px] text-slate-600">企业分析：优秀商业模式、护城河、管理层</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">2</div>
            <div className="text-[10px] text-slate-600">财务分析：ROE ≥ 15%、负债率 ≤ 60%</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">3</div>
            <div className="text-[10px] text-slate-600">估值分析：PE、PB历史分位数 {'<'} 30%</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">4</div>
            <div className="text-[10px] text-slate-600">安全边际：买入价 ≤ 内在价值的70%</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-red-50 rounded-xl">
        <div className="text-sm font-bold text-red-700 mb-3">价值投资陷阱</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">价值陷阱：便宜但基本面恶化</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">成长陷阱：高增长但估值过高</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">周期陷阱：周期顶部的价值股</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：成长投资 ---
export const GrowthInvestingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-purple-50">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-road text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 mb-2">赛道</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 新兴产业</div>
          <div>• 政策支持</div>
          <div>• 市场空间大</div>
        </div>
      </div>
      <div className="text-center p-4 bg-pink-50 rounded-xl">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mx-auto mb-2">
          <i className="fa-solid fa-building text-xl"></i>
        </div>
        <div className="text-xs font-bold text-pink-700 mb-2">公司</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 核心技术</div>
          <div>• 商业模式</div>
          <div>• 优秀管理层</div>
        </div>
      </div>
      <div className="text-center p-4 bg-indigo-50 rounded-xl">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 mx-auto mb-2">
          <i className="fa-solid fa-clock text-xl"></i>
        </div>
        <div className="text-xs font-bold text-indigo-700 mb-2">时机</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 早期：高风险高收益</div>
          <div>• 成长期：适中</div>
          <div>• 成熟期：低风险</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：波段操作 ---
export const SwingTradingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-orange-50">
    <div className="flex items-center justify-around mb-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-arrow-trend-up text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700">买入信号</div>
        <div className="text-[9px] text-slate-500">突破阻力位</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-2">
          <i className="fa-solid fa-clock text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-amber-700">持仓</div>
        <div className="text-[9px] text-slate-500">1-4周</div>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mx-auto mb-2">
          <i className="fa-solid fa-arrow-trend-down text-2xl"></i>
        </div>
        <div className="text-xs font-bold text-red-700">卖出信号</div>
        <div className="text-[9px] text-slate-500">跌破支撑位</div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <div className="text-[9px] font-bold text-orange-700">止损</div>
        <div className="text-[9px] text-slate-500">5-8%</div>
      </div>
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <div className="text-[9px] font-bold text-blue-700">仓位</div>
        <div className="text-[9px] text-slate-500">50-70%</div>
      </div>
      <div className="text-center p-3 bg-purple-50 rounded-lg">
        <div className="text-[9px] font-bold text-purple-700">止盈</div>
        <div className="text-[9px] text-slate-500">分批卖出</div>
      </div>
    </div>
  </div>
);

// --- 高级实战课：仓位管理 ---
export const PositionSizingVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-blue-50">
    <div className="text-sm font-bold text-slate-700 mb-4 text-center">凯利公式：f* = (bp - q) / b</div>
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="text-xs font-bold text-blue-700 mb-3">变量说明</div>
        <div className="space-y-2 text-[10px] text-slate-600">
          <div><span className="font-bold">f*</span> = 最优仓位比例</div>
          <div><span className="font-bold">b</span> = 盈亏比（盈利/亏损）</div>
          <div><span className="font-bold">p</span> = 胜率（盈利概率）</div>
          <div><span className="font-bold">q</span> = 败率（1-p）</div>
        </div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="text-xs font-bold text-emerald-700 mb-3">应用策略</div>
        <div className="space-y-2 text-[10px] text-slate-600">
          <div>• 保守策略：使用凯利公式的一半</div>
          <div>• 激进策略：使用凯利公式的全值</div>
          <div>• 实际应用：单只股票 ≤ 10%</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：止损 ---
export const StopLossVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-red-50">
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="text-center p-3 bg-red-50 rounded-lg">
        <div className="text-[10px] font-bold text-red-700 mb-1">短线交易</div>
        <div className="text-2xl font-bold text-red-500">5-8%</div>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <div className="text-[10px] font-bold text-orange-700 mb-1">中线交易</div>
        <div className="text-2xl font-bold text-orange-500">10-15%</div>
      </div>
      <div className="text-center p-3 bg-amber-50 rounded-lg">
        <div className="text-[10px] font-bold text-amber-700 mb-1">长线投资</div>
        <div className="text-2xl font-bold text-amber-500">20-30%</div>
      </div>
    </div>
    <div className="p-3 bg-red-100 rounded-lg">
      <div className="text-[10px] font-bold text-red-700 mb-1">⚠️ 止损执行纪律</div>
      <div className="text-[9px] text-slate-600">预先设定 | 严格执行 | 及时调整 | 接受亏损</div>
    </div>
  </div>
);

// --- 风险控制与心态管理：风险控制 ---
export const RiskControlVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-cyan-50">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center p-4 bg-cyan-50 rounded-xl">
        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-500 mx-auto mb-2">
          <i className="fa-solid fa-shield-halved text-xl"></i>
        </div>
        <div className="text-xs font-bold text-cyan-700 mb-2">分散投资</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 单只股票 ≤ 10%</div>
          <div>• 单一行业 ≤ 30%</div>
          <div>• 股债均衡配置</div>
        </div>
      </div>
      <div className="text-center p-4 bg-blue-50 rounded-xl">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-scale-unbalanced text-xl"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 mb-2">仓位管理</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 保守型：≤ 50%</div>
          <div>• 平衡型：50-70%</div>
          <div>• 激进型：70-90%</div>
        </div>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-arrows-rotate text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 mb-2">动态调整</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>• 牛市：降低仓位</div>
          <div>• 熊市：提高仓位</div>
          <div>• 震荡：观望为主</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：仓位管理 ---
export const PositionManagementVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="text-sm font-bold text-emerald-700 mb-3">金字塔建仓法</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold">1</div>
            <div className="text-[10px] text-slate-600">第一次：买入30%</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-300 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold">2</div>
            <div className="text-[10px] text-slate-600">第二次：上涨5%后加仓30%</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold">3</div>
            <div className="text-[10px] text-slate-600">第三次：再上涨5%后加仓20%</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-orange-50 rounded-xl">
        <div className="text-sm font-bold text-orange-700 mb-3">倒金字塔建仓法</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold">1</div>
            <div className="text-[10px] text-slate-600">第一次：买入20%</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold">2</div>
            <div className="text-[10px] text-slate-600">第二次：下跌5%后加仓30%</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold">3</div>
            <div className="text-[10px] text-slate-600">第三次：再下跌5%后加仓50%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：心理偏差 ---
export const PsychologicalBiasVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-purple-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="text-sm font-bold text-purple-700 mb-3">确认偏差</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">只关注支持自己观点的信息</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">忽视相反的证据和警告</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">对抗：主动寻找反对意见</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-indigo-50 rounded-xl">
        <div className="text-sm font-bold text-indigo-700 mb-3">过度自信</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">高估自己的能力和判断</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">忽视风险和概率</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">对抗：保持谦逊，承认无知</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：情绪控制 ---
export const EmotionalControlVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-rose-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-red-50 rounded-xl">
        <div className="text-sm font-bold text-red-700 mb-3">贪婪</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">追涨、重仓、不止盈</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">后果：高位套牢、利润回吐</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">对抗：设定止盈位，分批卖出</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="text-sm font-bold text-blue-700 mb-3">恐惧</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">杀跌、空仓、不敢买</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">后果：错失机会、踏空</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">对抗：制定计划，严格执行</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：交易纪律 ---
export const TradingDisciplineVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-slate-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="text-sm font-bold text-emerald-700 mb-3">建立交易系统</div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold mt-0.5">1</div>
            <div className="text-[10px] text-slate-600">入场规则：技术信号、基本面、风险收益比</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold mt-0.5">2</div>
            <div className="text-[10px] text-slate-600">出场规则：止损、止盈、时间</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold mt-0.5">3</div>
            <div className="text-[10px] text-slate-600">仓位规则：单只股票、总仓位、现金储备</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs font-bold mt-0.5">4</div>
            <div className="text-[10px] text-slate-600">风险规则：最大回撤、单日亏损、连续亏损</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-red-50 rounded-xl">
        <div className="text-sm font-bold text-red-700 mb-3">交易纪律的敌人</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">情绪化决策：贪婪、恐惧</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">外界干扰：市场噪音、他人建议</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">过度自信：认为自己能战胜市场</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs">!</div>
            <div className="text-[10px] text-slate-600">缺乏耐心：急于求成</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险控制与心态管理：资金管理 ---
export const MoneyManagementVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-green-50">
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="text-center p-4 bg-blue-50 rounded-xl">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-layer-group text-xl"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 mb-2">核心-卫星</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>核心 70%</div>
          <div>卫星 30%</div>
        </div>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-scale-balanced text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 mb-2">股债平衡</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>股票 60-70%</div>
          <div>债券 20-30%</div>
        </div>
      </div>
      <div className="text-center p-4 bg-emerald-50 rounded-xl">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-calendar-check text-xl"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700 mb-2">定投策略</div>
        <div className="text-[9px] text-slate-600 space-y-1">
          <div>固定金额</div>
          <div>定期投入</div>
        </div>
      </div>
    </div>
    <div className="p-3 bg-green-100 rounded-lg">
      <div className="text-[10px] font-bold text-green-700 mb-1">风险预算</div>
      <div className="text-[9px] text-slate-600">单笔 ≤ 2% | 单日 ≤ 5% | 单月 ≤ 10% | 年度 ≤ 20%</div>
    </div>
  </div>
);

// --- 风险控制与心态管理：交易日记 ---
export const TradingJournalVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-amber-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-amber-50 rounded-xl">
        <div className="text-sm font-bold text-amber-700 mb-3">交易日记内容</div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">1</div>
            <div className="text-[10px] text-slate-600">基本信息：日期、股票、价格、盈亏</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">2</div>
            <div className="text-[10px] text-slate-600">交易理由：入场、出场、风险收益比</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">3</div>
            <div className="text-[10px] text-slate-600">情绪状态：贪婪、恐惧、冷静</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold mt-0.5">4</div>
            <div className="text-[10px] text-slate-600">复盘总结：成功原因、失败原因、改进措施</div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="text-sm font-bold text-emerald-700 mb-3">交易日记分析</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">定期回顾：每周、每月、每年</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">统计胜率：计算交易胜率和盈亏比</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">找出模式：发现成功和失败的规律</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-xs">✓</div>
            <div className="text-[10px] text-slate-600">优化策略：根据分析结果调整策略</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险管理：投资组合理论 ---
export const PortfolioTheoryVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-blue-50">
    <div className="text-sm font-bold text-blue-700 mb-4">分散投资的三种方式</div>
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-layer-group text-xl"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 text-center mb-2">资产类别分散</div>
        <div className="text-[9px] text-slate-600 text-center">股票、债券、现金、商品、房地产</div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-industry text-xl"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700 text-center mb-2">行业分散</div>
        <div className="text-[9px] text-slate-600 text-center">科技、金融、消费、医疗、能源</div>
      </div>
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-globe text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 text-center mb-2">地域分散</div>
        <div className="text-[9px] text-slate-600 text-center">A股、港股、美股、欧洲市场</div>
      </div>
    </div>
    <div className="p-4 bg-amber-50 rounded-xl">
      <div className="text-xs font-bold text-amber-700 mb-2">经典组合示例</div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <div className="text-[9px] text-slate-600">60/40组合</div>
          <div className="text-xs font-bold text-slate-700">60%股票 + 40%债券</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">永久组合</div>
          <div className="text-xs font-bold text-slate-700">25%股票 + 25%债券 + 25%黄金 + 25%现金</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">核心-卫星</div>
          <div className="text-xs font-bold text-slate-700">70%指数基金 + 30%主动基金</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险管理：风险类型识别 ---
export const RiskTypesVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-red-50">
    <div className="grid grid-cols-2 gap-6">
      <div className="p-4 bg-red-50 rounded-xl">
        <div className="text-sm font-bold text-red-700 mb-3">系统性风险（市场风险）</div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">经济周期：经济衰退、通货膨胀</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">政策变化：货币政策、财政政策</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">国际事件：战争、贸易战、金融危机</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">自然灾害：地震、疫情</div>
          </div>
        </div>
        <div className="mt-3 p-2 bg-red-100 rounded-lg">
          <div className="text-[9px] font-bold text-red-600">无法通过分散投资消除，只能对冲</div>
        </div>
      </div>
      <div className="p-4 bg-orange-50 rounded-xl">
        <div className="text-sm font-bold text-orange-700 mb-3">非系统性风险（特有风险）</div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">公司风险：管理层、财务、经营问题</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">行业风险：政策变化、技术变革、竞争加剧</div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-0.5">!</div>
            <div className="text-[10px] text-slate-600">事件风险：诉讼、丑闻、安全事故</div>
          </div>
        </div>
        <div className="mt-3 p-2 bg-orange-100 rounded-lg">
          <div className="text-[9px] font-bold text-orange-600">可以通过分散投资消除</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 风险管理：风险控制工具 ---
export const RiskControlToolsVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-emerald-50">
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-2">
          <i className="fa-solid fa-ban text-xl"></i>
        </div>
        <div className="text-xs font-bold text-blue-700 text-center mb-2">止损工具</div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 固定止损：7%</div>
          <div className="text-[9px] text-slate-600">• 移动止损：保护利润</div>
          <div className="text-[9px] text-slate-600">• 时间止损：30天</div>
        </div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-2">
          <i className="fa-solid fa-shield-halved text-xl"></i>
        </div>
        <div className="text-xs font-bold text-emerald-700 text-center mb-2">对冲工具</div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 股指期货：大资金</div>
          <div className="text-[9px] text-slate-600">• 期权：中小资金</div>
          <div className="text-[9px] text-slate-600">• 黄金：5-10%配置</div>
        </div>
      </div>
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mx-auto mb-2">
          <i className="fa-solid fa-umbrella text-xl"></i>
        </div>
        <div className="text-xs font-bold text-purple-700 text-center mb-2">保险工具</div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 资产配置：降低波动</div>
          <div className="text-[9px] text-slate-600">• 定投：平摊成本</div>
          <div className="text-[9px] text-slate-600">• 现金储备：10-20%</div>
        </div>
      </div>
    </div>
    <div className="p-4 bg-amber-50 rounded-xl">
      <div className="text-xs font-bold text-amber-700 mb-2">风险预算</div>
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center">
          <div className="text-[9px] text-slate-600">单笔风险</div>
          <div className="text-xs font-bold text-slate-700">{'<'} 2%</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">单日风险</div>
          <div className="text-xs font-bold text-slate-700">{'<'} 5%</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">单月风险</div>
          <div className="text-xs font-bold text-slate-700">{'<'} 10%</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">年度风险</div>
          <div className="text-xs font-bold text-slate-700">{'<'} 20%</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 基金与ETF投资：指数基金入门 ---
export const IndexFundVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="text-sm font-bold text-indigo-700 mb-4">指数基金的优势</div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-4 bg-indigo-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500">
            <i className="fa-solid fa-coins text-sm"></i>
          </div>
          <div className="text-xs font-bold text-indigo-700">成本低</div>
        </div>
        <div className="text-[9px] text-slate-600">管理费：0.1%-0.5%（主动基金1%-2%）</div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
            <i className="fa-solid fa-eye text-sm"></i>
          </div>
          <div className="text-xs font-bold text-emerald-700">透明度高</div>
        </div>
        <div className="text-[9px] text-slate-600">持仓公开，无暗箱操作，无老鼠仓</div>
      </div>
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
            <i className="fa-solid fa-shield-halved text-sm"></i>
          </div>
          <div className="text-xs font-bold text-blue-700">分散风险</div>
        </div>
        <div className="text-[9px] text-slate-600">持有几十到几百只股票，避免个股暴雷</div>
      </div>
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
            <i className="fa-solid fa-chart-line text-sm"></i>
          </div>
          <div className="text-xs font-bold text-purple-700">长期收益稳定</div>
        </div>
        <div className="text-[9px] text-slate-600">长期跑赢大多数主动基金</div>
      </div>
    </div>
    <div className="p-4 bg-amber-50 rounded-xl">
      <div className="text-xs font-bold text-amber-700 mb-2">常见指数</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="text-[9px] text-slate-600">宽基指数</div>
          <div className="text-xs font-bold text-slate-700">沪深300、中证500、中证1000、标普500</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">行业指数</div>
          <div className="text-xs font-bold text-slate-700">科技、医药、消费、金融</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 基金与ETF投资：ETF投资 ---
export const ETFInvestmentVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-teal-50">
    <div className="text-sm font-bold text-teal-700 mb-4">ETF的优势</div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-4 bg-teal-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-500">
            <i className="fa-solid fa-arrows-rotate text-sm"></i>
          </div>
          <div className="text-xs font-bold text-teal-700">交易灵活</div>
        </div>
        <div className="text-[9px] text-slate-600">交易时间与方式同股票，T+1交易</div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
            <i className="fa-solid fa-coins text-sm"></i>
          </div>
          <div className="text-xs font-bold text-emerald-700">成本低</div>
        </div>
        <div className="text-[9px] text-slate-600">管理费0.1%-0.5%，无申购赎回费</div>
      </div>
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
            <i className="fa-solid fa-eye text-sm"></i>
          </div>
          <div className="text-xs font-bold text-blue-700">透明度高</div>
        </div>
        <div className="text-[9px] text-slate-600">实时公布净值（IOPV），持仓公开</div>
      </div>
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
            <i className="fa-solid fa-bolt text-sm"></i>
          </div>
          <div className="text-xs font-bold text-purple-700">流动性好</div>
        </div>
        <div className="text-[9px] text-slate-600">可以随时买卖，无需等待申购赎回</div>
      </div>
    </div>
    <div className="p-4 bg-amber-50 rounded-xl">
      <div className="text-xs font-bold text-amber-700 mb-2">ETF类型</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="text-[9px] text-slate-600">股票ETF</div>
          <div className="text-xs font-bold text-slate-700">宽基ETF、行业ETF、主题ETF</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] text-slate-600">跨境ETF</div>
          <div className="text-xs font-bold text-slate-700">美股ETF、港股ETF（T+0）</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 基金与ETF投资：主动基金选择 ---
export const ActiveFundVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-orange-50">
    <div className="text-sm font-bold text-orange-700 mb-4">选择主动基金的四大标准</div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-orange-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
            <i className="fa-solid fa-user-tie text-sm"></i>
          </div>
          <div className="text-xs font-bold text-orange-700">基金经理</div>
        </div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 从业经验：至少5年以上</div>
          <div className="text-[9px] text-slate-600">• 历史业绩：长期跑赢基准</div>
          <div className="text-[9px] text-slate-600">• 投资风格：价值、成长、均衡</div>
        </div>
      </div>
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
            <i className="fa-solid fa-chart-line text-sm"></i>
          </div>
          <div className="text-xs font-bold text-emerald-700">基金业绩</div>
        </div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 长期业绩：3-5年优秀</div>
          <div className="text-[9px] text-slate-600">• 相对排名：同类前1/3</div>
          <div className="text-[9px] text-slate-600">• 风险调整收益：夏普比率高</div>
        </div>
      </div>
      <div className="p-4 bg-blue-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
            <i className="fa-solid fa-building text-sm"></i>
          </div>
          <div className="text-xs font-bold text-blue-700">基金公司</div>
        </div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 实力：头部基金公司更可靠</div>
          <div className="text-[9px] text-slate-600">• 投研团队：研究团队强大</div>
          <div className="text-[9px] text-slate-600">• 风控能力：风险控制严格</div>
        </div>
      </div>
      <div className="p-4 bg-purple-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
            <i className="fa-solid fa-scale-balanced text-sm"></i>
          </div>
          <div className="text-xs font-bold text-purple-700">基金规模</div>
        </div>
        <div className="space-y-1">
          <div className="text-[9px] text-slate-600">• 适中规模：10-100亿元</div>
          <div className="text-[9px] text-slate-600">• 过小：清盘风险</div>
          <div className="text-[9px] text-slate-600">• 过大：操作困难，收益下降</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 基金与ETF投资：基金配置策略 ---
export const FundAllocationVisual = () => (
  <div className="bg-white p-6 rounded-2xl my-6 border-2 border-indigo-50">
    <div className="text-sm font-bold text-indigo-700 mb-4">核心-卫星策略</div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-4 bg-indigo-50 rounded-xl">
        <div className="text-xs font-bold text-indigo-700 mb-2">核心资产（70%）</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 text-xs font-bold">70%</div>
            <div className="text-[10px] text-slate-600">宽基指数基金：沪深300ETF、中证500ETF</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 text-xs font-bold">70%</div>
            <div className="text-[10px] text-slate-600">债券基金：国债基金、企业债基金</div>
          </div>
        </div>
        <div className="mt-2 p-2 bg-indigo-100 rounded-lg">
          <div className="text-[9px] font-bold text-indigo-600">目标：稳健增长，降低风险</div>
        </div>
      </div>
      <div className="p-4 bg-amber-50 rounded-xl">
        <div className="text-xs font-bold text-amber-700 mb-2">卫星资产（30%）</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold">30%</div>
            <div className="text-[10px] text-slate-600">行业ETF：科技、医药、消费</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold">30%</div>
            <div className="text-[10px] text-slate-600">主动基金：优秀的主动基金</div>
          </div>
        </div>
        <div className="mt-2 p-2 bg-amber-100 rounded-lg">
          <div className="text-[9px] font-bold text-amber-600">目标：超额收益，提升回报</div>
        </div>
      </div>
    </div>
    <div className="p-4 bg-emerald-50 rounded-xl">
      <div className="text-xs font-bold text-emerald-700 mb-2">股债平衡策略</div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-2 bg-white rounded-lg">
          <div className="text-[9px] text-slate-600">保守型</div>
          <div className="text-xs font-bold text-slate-700">30%股票 + 70%债券</div>
        </div>
        <div className="text-center p-2 bg-white rounded-lg">
          <div className="text-[9px] text-slate-600">稳健型</div>
          <div className="text-xs font-bold text-slate-700">50%股票 + 50%债券</div>
        </div>
        <div className="text-center p-2 bg-white rounded-lg">
          <div className="text-[9px] text-slate-600">进取型</div>
          <div className="text-xs font-bold text-slate-700">70%股票 + 30%债券</div>
        </div>
      </div>
    </div>
  </div>
);
