
import { CourseStage, Module } from './types';

export const COURSE_MODULES: Module[] = [
  {
    stage: CourseStage.BASICS,
    lessons: [
      { 
        id: 'b1', 
        title: '01. 股票的本质与合伙思维', 
        duration: '15分钟', 
        icon: 'fa-seedling', 
        description: '从股权协议到交易凭证，看透财富增长的底层逻辑。', 
        content: '股票本质上是企业的“所有权凭证”。当你持有一家公司的股票，你就是其法律意义上的股东，享有资产收益权、重大决策参与权。投资股票的本质是“合伙做生意”，利用资本杠杆分享优秀企业成长的红利。', 
        practicalTask: '在手机里找三个你每天都要用的 App（如微信、美团、抖音），查查它们背后公司的股票代码，看看它们在哪个交易所上市（沪、深、港、美）。', 
        analogy: '买股票就像和朋友合伙开面馆，你出钱不干活（财务投资），面馆赚了钱按股份分红，品牌值钱了你的股份也随之升值。', 
        expertTip: '新人常犯错误是把股票当成上下跳动的数字。请问自己：如果没有股市，我愿意以这个价格入股这家公司吗？',
        keyTerms: [
          { term: '普通股', definition: '最常见的股票类型，享有分红权和投票权，收益随公司业绩波动。' },
          { term: '优先股', definition: '在利润分配和剩余财产清偿上优于普通股，但通常没有投票权。' }
        ], 
        visualType: 'order-book' 
      },
      { 
        id: 'b2', 
        title: '02. 市场全貌：A/港/美股差异', 
        duration: '20分钟', 
        icon: 'fa-globe', 
        description: '职场新人如何根据自身资产状况和时差选择主战场？', 
        content: '1. **A股**：人民币计价，受政策导向影响大，有10%/20%涨跌停限制，适合通过基金定投参与国家发展红利。\n2. **港股**：国际化程度高，不设涨跌停，估值普遍较低，是许多互联网巨头所在地。\n3. **美股**：全球定价中心，规则最成熟，T+0交易，适合配置全球顶级科技股。', 
        practicalTask: '安装一个行情软件，对比“贵州茅台（A股）”、“腾讯控股（港股）”和“英伟达（美股）”的市盈率（PE-TTM），感受不同市场的定价偏好。', 
        analogy: 'A股像家门口的集市；港股像高端奥特莱斯；美股像全球博览会。', 
        expertTip: '初学者建议先从A股开始，因为这里的消费习惯和新闻离你最近，信息差相对较小。',
        keyTerms: [
          { term: '蓝筹股', definition: '市值大、业绩优、分红稳、具有行业领导地位的公司股票。' },
          { term: '中概股', definition: '主要业务在中国境内，但在海外（主要指美国或香港）上市的公司。' }
        ] 
      },
      { 
        id: 'b3', 
        title: '03. 费用结构全解析：省下就是赚', 
        duration: '15分钟', 
        icon: 'fa-calculator', 
        visualType: 'fee-calc', 
        description: '佣金、印花税与摩擦成本，别让手续费吃掉你的复利。', 
        content: '交易成本由三部分组成：\n1. **佣金**：目前主流万2.5，注意单笔最低5元限制。\n2. **印花税**：卖出时单向收取0.05%（由国家征收）。\n3. **过户费**：极低，按成交金额收取。\n小额高频交易会通过“5元起收”规则迅速损耗你的本金。', 
        practicalTask: '使用费用计算器，分别计算交易2,000元和20,000元时的手续费占比，观察“5元最低限额”对小额投资的影响。', 
        analogy: '手续费就像去赌场进门的“抽水”，你进出次数越多，本金损耗就越严重。', 
        expertTip: '开户时一定要找客户经理谈佣金，争取“万一”或“免五”优惠。',
        keyTerms: [
          { term: '过户费', definition: '证券登记结算机构为提供股权变更登记服务收取的费用。' },
          { term: '经手费', definition: '交易所按成交金额的一定比例收取的费用。' }
        ] 
      },
      { 
        id: 'b4', 
        title: '04. A股核心制度：T+1与涨跌停', 
        duration: '15分钟', 
        icon: 'fa-clock', 
        description: '理解独特的交易机制，避免“误操作”。', 
        content: '1. **T+1**：当天买入的股票，第二个交易日才能卖出。这意味着你没有实时反悔的机会。\n2. **涨跌停板**：主板10%，创业板/科创板20%。价格到达限制后，只能在限制价内交易。这旨在抑制恐慌，但也可能导致流动性瞬间锁死。', 
        practicalTask: '在软件中搜索“涨停板”排名，观察那些涨停的公司，看看它们封板时的买盘（买一）有多大。', 
        analogy: 'T+1就像进游乐场必须住一晚才能走；涨跌停就像给车装了限速器，防止开太快翻车。', 
        expertTip: '涨停不代表明天一定涨，可能是诱多；跌停时如果你想出局，往往一个买家都没有。',
        keyTerms: [
          { term: '集合竞价', definition: '开盘前通过电脑自动撮合产生开盘价的过程，反映了市场最真实的情绪。' },
          { term: '连续竞价', definition: '交易时间内根据“价格优先、时间优先”原则进行的实时撮合。' }
        ] 
      },
      { 
        id: 'b5', 
        title: '05. 订单执行：限价单 vs 市价单', 
        duration: '15分钟', 
        icon: 'fa-bolt', 
        description: '如何在激烈的行情中精准成交？', 
        content: '1. **限价单**：指定价格，不到不买。保护你不买贵，但可能错过行情。\n2. **市价单**：按当前最优价立即成交。保证速度，但在剧烈波动时可能导致买入价格远超预期。', 
        practicalTask: '模拟下单时，观察买一到买五的深度，思考如果你要买100万，市价单会把价格推高多少。', 
        analogy: '限价单是“非10块钱不买”；市价单是“不管多少钱，现在就给我”。', 
        expertTip: '在流动性较差的股票上，千万不要下大笔市价单。',
        keyTerms: [
          { term: '冰山订单', definition: '大机构隐藏真实意图，将大单拆分成无数小单缓慢成交的手段。' }
        ] 
      },
      { 
        id: 'b6', 
        title: '06. 账户权限：从融资到打新', 
        duration: '15分钟', 
        icon: 'fa-user-shield', 
        visualType: 'risk-meter', 
        description: '你的账户能玩多大？理解风险等级。', 
        content: '普通账户只能买股票。进阶后可开通：\n1. **融资融券**：借钱买股（加杠杆）。\n2. **新股申购**：博取低风险收益（套利）。\n3. **衍生品**：期权、期货。权限开通需要通过风险测评。', 
        practicalTask: '查看你的券商App，看看开通“创业板”或“科创板”需要什么条件（通常是资金和经验要求）。', 
        analogy: '账户权限就像游戏里的等级锁，等级越高地图越广，但怪（风险）也越猛。', 
        keyTerms: [
          { term: '融资融券', definition: '投资者向券商借入资金买入证券或借入证券卖出的交易行为。' }
        ] 
      },
      { 
        id: 'b7', 
        title: '07. 市场参与者：谁是你的对手？', 
        duration: '15分钟', 
        icon: 'fa-people-group', 
        description: '识别庄家、机构与游资的博弈。', 
        content: '市场由几股力量组成：\n1. **机构**（公募、保险、QFII）：追求稳健，风格偏价值。\n2. **游资**：热衷短线题材，快进快出。\n3. **散户**：人数多但力量散。理解对手的逻辑是生存关键。', 
        practicalTask: '查看一支热门股的“龙虎榜”，看看是哪些营业部在买入，它们是知名游资吗？', 
        analogy: '股市像大海，有鲸鱼（机构）、鲨鱼（游资）和无数小鱼（散户）。', 
        keyTerms: [
          { term: '北向资金', definition: '通过沪深港通从香港流向内地的外资，常被视为“聪明钱”。' }
        ] 
      },
      { 
        id: 'b8', 
        title: '08. 新股申购：A股的“红包”机制', 
        duration: '15分钟', 
        icon: 'fa-gift', 
        description: '打新股：职场新人的第一笔套利。', 
        content: 'A股打新曾是几乎无风险的收益（因IPO定价限制），目前实行全面注册制，新股不再“保涨”。中签率极低，通常万分之几。', 
        practicalTask: '查阅最近上市的三个新股，看看它们首日的涨跌幅情况，计算平均收益。', 
        analogy: '打新股就像抽彩票，中签了就有机会中大奖，但现在彩票也有赔本的可能。', 
        keyTerms: [
          { term: '中签', definition: '在申购新股时被电脑随机抽中，获得买入资格。' }
        ] 
      }
    ]
  },
  {
    stage: CourseStage.PSYCHOLOGY,
    lessons: [
      { 
        id: 'p1', 
        title: '09. 损失厌恶：投资心理黑洞', 
        duration: '20分钟', 
        icon: 'fa-brain', 
        visualType: 'cognitive-bias', 
        description: '为什么亏钱的痛苦是赚钱快乐的两倍？', 
        content: '由于进化本能，人类对损失极度敏感。这导致投资者产生“处置效应”：赚钱的票拿不住（想落袋为安），亏钱的票死扛（不卖就不算亏）。', 
        practicalTask: '写下你最近一次亏损时的心情，你是否产生了“回本就卖”的执念？', 
        analogy: '就像你的旧衣服不舍得扔，明知道已经过时且不合身，却一直占着衣柜空间。', 
        expertTip: '止损是反人性的，但只有学会认输，你才能在这个市场活下去。',
        keyTerms: [
          { term: '处置效应', definition: '投资者倾向于过快卖出盈利品种，而长期持有亏损品种的心理。' }
        ] 
      },
      { 
        id: 'p2', 
        title: '10. 羊群效应：当所有人都在聊股票', 
        duration: '20分钟', 
        icon: 'fa-users-rays', 
        description: '识别人声鼎沸时的危险信号。', 
        content: '当写字楼电梯里、健身房休息室都在讨论某支股票时，最后一批买家已经进场了。这就是所谓的“擦鞋童理论”。', 
        practicalTask: '回忆2015年或2021年市场最火热时身边的氛围，思考当时的情绪是如何影响你的决策的。', 
        analogy: '电影院起火时，大家都往一个门冲，结果谁也跑不掉。', 
        expertTip: '逆向投资需要勇气。在别人贪婪时恐惧，在别人恐惧时贪婪。',
        keyTerms: [
          { term: '逆向思维', definition: '不被主流情绪左右，独立判断价值与价格的关系。' }
        ] 
      },
      { 
        id: 'p3', 
        title: '11. 锚定效应：不要爱上买入价', 
        duration: '20分钟', 
        icon: 'fa-anchor', 
        description: '价格不等于价值，买入价只是一个历史坐标。', 
        content: '新手总喜欢看自己的成本价。但市场并不关心你的成本。股价的变动只取决于公司未来的赚钱能力和资金的共识。', 
        practicalTask: '选择一个你亏损的股票，问自己：如果我现在有现金，我还会以现在的价格买入它吗？', 
        analogy: '买入价就像你前任的照片，虽然深刻，但它对你未来的生活没有任何指导意义。', 
        keyTerms: [
          { term: '沉没成本', definition: '已经发生且无法收回的成本，不应影响未来的决策。' }
        ] 
      },
      {
        id: 'p4',
        title: '12. 决策疲劳：无效看盘的代价',
        duration: '15分钟',
        icon: 'fa-battery-half',
        description: '减少无效操作，保留高阶意志力。',
        content: '频繁盯盘会诱发多巴胺激增，导致过度的情绪化操作。每一次“买入”或“卖出”都在消耗你的意志力。',
        practicalTask: '尝试一天不看行情，只在收盘后看一眼，对比你的心理压力。',
        analogy: '就像在高速上开长途，一直频繁变道超车（短线买卖）会让你极度疲劳，增加事故概率。',
        keyTerms: [{ term: '过热交易', definition: '由于情绪激动或决策疲劳导致的非理性、无计划的高频操作。' }]
      },
      {
        id: 'p5',
        title: '13. 均值回归：重力永远存在',
        duration: '20分钟',
        icon: 'fa-arrows-to-circle',
        description: '理解钟摆的客观规律。',
        content: '任何偏离基本面的暴涨或暴跌最终都会回来。不要在钟摆的最高点产生“永恒增长”的幻觉。',
        practicalTask: '寻找一个曾经暴涨过但现在跌回原点的股票（如疫情概念股），观察其回归路径。',
        analogy: '橡皮筋拉得越紧，弹回来的力度就越大。',
        keyTerms: [{ term: '均值回归', definition: '资产价格无论偏离多远，最终都会回到其长期平均价值水平。' }]
      }
    ]
  },
  {
    stage: CourseStage.TECHNICAL,
    lessons: [
      { 
        id: 't1', 
        title: '14. K线解剖：多空博弈的足迹', 
        duration: '25分钟', 
        icon: 'fa-chart-candlestick', 
        visualType: 'kline-quiz', 
        description: '阳线代表胜利，阴线代表撤退。', 
        content: '开盘、收盘、最高、最低构成了K线。长影线代表试探后的撤退，长实体代表力量的悬殊。', 
        practicalTask: '在K线图中找到“十字星”，思考为什么它通常代表变盘的信号。', 
        analogy: 'K线就像战场上双方留下的足迹。', 
        expertTip: '不要只看单根K线，组合形态（如“红三兵”、“乌云盖顶”）更有意义。',
        keyTerms: [
          { term: '十字星', definition: '开盘价与收盘价极度接近，代表多空平衡。' },
          { term: '锤子线', definition: '具有很长下影线的K线，通常出现在下跌末端，代表支撑。' }
        ] 
      },
      { 
        id: 't2', 
        title: '15. 移动平均线：市场的成本共识', 
        duration: '20分钟', 
        icon: 'fa-wave-square', 
        visualType: 'ma-lines', 
        description: 'MA5、MA20、MA60的实战逻辑。', 
        content: '均线是过去N天买入者的平均成本。MA20被视为“生命线”。股价在均线上方代表强势，跌破代表趋势转弱。', 
        practicalTask: '在行情软件中添加MA20，看看你心仪的票现在是运行在“水面上”还是“水面下”。', 
        analogy: '均线就像遛狗时的那根绳子，狗（股价）会乱跑但总会回到主人（均线）身边。', 
        keyTerms: [
          { term: '金叉', definition: '短期均线上穿长期均线，代表热度加速。' },
          { term: '死叉', definition: '短期均线下穿长期均线，代表下跌动能增强。' }
        ] 
      },
      { 
        id: 't3', 
        title: '16. 成交量：真金白银的选票', 
        duration: '20分钟', 
        icon: 'fa-chart-simple', 
        visualType: 'volume-chart', 
        description: '量在价先：燃料决定速度。', 
        content: '没有成交量的上涨是耍流氓。放量下跌代表割肉盘涌出。换手率高代表流动性好，但也预示着分歧大。', 
        practicalTask: '找一个放量突破箱体的案例，观察其后续走势。', 
        analogy: '成交量是油门，股价是车速。油门踩到底速度还不快，车肯定有问题。', 
        keyTerms: [
          { term: '倍量', definition: '成交量是前一日的一倍以上。' },
          { term: '缩量', definition: '成交量显著萎缩，代表多空双方达成暂时平衡。' }
        ] 
      },
      { 
        id: 't4', 
        title: '17. 指标之王：MACD详解', 
        duration: '25分钟', 
        icon: 'fa-chart-line', 
        visualType: 'macd-viz', 
        description: '识别动量的加速与衰竭。', 
        content: '通过快慢线（DIF/DEA）和柱状图，观察趋势的动能。0轴之上是多头，0轴之下是空头。最重要的信号是“背离”。', 
        practicalTask: '寻找一次“底背离”：股价创新低，但MACD绿柱反而缩短，线也向上。', 
        analogy: 'MACD就像海水的潮汐，预示着浪潮何时退去。', 
        keyTerms: [
          { term: '背离', definition: '价格走势与技术指标走势相反，是极其重要的反转信号。' }
        ] 
      },
      { 
        id: 't5', 
        title: '18. KDJ与RSI：测量极端情绪', 
        duration: '25分钟', 
        icon: 'fa-temperature-half', 
        visualType: 'kdj-rsi-viz', 
        description: '超买与超卖的边界。', 
        content: '当RSI进入80以上，代表大家都买疯了，随时可能回调；20以下代表大家都吓坏了，随时可能反弹。', 
        practicalTask: '设置RSI指标为14日，寻找最近一个月出现过“超卖”反弹的机会。', 
        analogy: '就像跑步，心率太快了（超买）必须停下来喘气。', 
        keyTerms: [
          { term: '钝化', definition: '在极强行情中，指标长期停留在极端区间失去参考意义。' }
        ] 
      },
      { 
        id: 't6', 
        title: '19. 布林带 BOLL：动态的堤坝', 
        duration: '25分钟', 
        icon: 'fa-arrows-left-right', 
        visualType: 'boll-bands', 
        description: '利用标准差寻找阻力与支撑。', 
        content: '布林带由中轨、上轨和下轨组成。股价触碰上轨通常预示卖压，触碰下轨预示支撑。重点关注“张口”与“收口”。', 
        practicalTask: '寻找一次布林带极度缩窄后的变盘案例。', 
        analogy: '就像河道的堤坝，水漫过堤坝就要小心溢出。', 
        keyTerms: [
          { term: '开口率', definition: '衡量布林带宽度的指标，反映波动率的大小。' }
        ] 
      },
      {
        id: 't7',
        title: '20. 缺口理论：瞬间爆发的力量',
        duration: '15分钟',
        icon: 'fa-bolt',
        description: '跳空背后的多空意志。',
        content: '跳空缺口代表由于重大利好/利空，交易者甚至不愿意等开盘。突破缺口通常不回补，预示大行情。',
        practicalTask: '在过去行情中找一个“突破缺口”，看它之后是否很快被回补。',
        analogy: '就像撑杆跳，瞬间发力跳过了原本无法逾越的高度。',
        keyTerms: [{ term: '普通缺口', definition: '在震荡区内出现的缺口，通常很快会被回补。' }]
      },
      {
        id: 't8',
        title: '21. 形态分析：识别双底与头肩顶',
        duration: '25分钟',
        icon: 'fa-chart-area',
        description: '图形背后的共识逻辑。',
        content: '市场有记忆。两次探底不破（W底）是经典的见底。图形是成千上万人博弈后的心理图谱。',
        practicalTask: '尝试画出当前指数的“颈线”，判断它是处于突破压力还是回踩支撑。',
        analogy: '就像建筑的基座，底打得越稳（时间越长），未来建得越高。',
        keyTerms: [{ term: '颈线', definition: '连接形态中关键高点或低点的参考线，突破即产生买卖点。' }]
      },
      {
        id: 't9',
        title: '22. 趋势线与支撑压力',
        duration: '20分钟',
        icon: 'fa-arrow-trend-up',
        description: '连点成线，寻找阻力最小的方向。',
        content: '上升趋势线连接低点。跌破趋势线通常是清仓信号。支撑位一旦被跌破，就会变成未来的压力位。',
        practicalTask: '为你持有的股票画出一条上升趋势线。',
        analogy: '趋势就像电梯，顺着坐很轻松，逆着走很累。',
        keyTerms: [{ term: '换手率', definition: '某一段时期内股票转手买卖的频率。' }]
      },
      {
        id: 't10',
        title: '23. 波浪理论入门：市场的韵律',
        duration: '25分钟',
        icon: 'fa-water',
        description: '理解涨三退二的波动本质。',
        content: '大行情通常由5个推动浪和3个调整浪组成。核心思想是：行情不是直线发展的。',
        practicalTask: '尝试给最近一波大行情标出1-5浪。',
        analogy: '大海的波浪，一波推一波，中间必有回落。',
        keyTerms: [{ term: '斐波那契数列', definition: '波浪理论常用来测算回撤比例的数学基础（如0.618）。' }]
      }
    ]
  },
  {
    stage: CourseStage.FINANCIALS,
    lessons: [
      { 
        id: 'f1', 
        title: '24. 估值魔方：PE、PB 与 PEG', 
        duration: '25分钟', 
        icon: 'fa-scale-unbalanced', 
        visualType: 'pe-calculator', 
        description: '贵不贵，看回本年限。', 
        content: 'PE（市盈率）代表按现在利润几年回本。PB（市净率）看你买入的是净资产的几倍。对于成长股，要看PEG（市盈率/增长率）。', 
        practicalTask: '对比苹果和可口可乐的PE，思考为什么高增长的科技股可以容忍更高倍数。', 
        analogy: '买铺子的租售比。同样的铺子，100万成交还是200万成交，决定了你回本难易。', 
        keyTerms: [
          { term: '安全边际', definition: '买入价远低于内在价值时所提供的心理和财务保护空间。' }
        ] 
      },
      { 
        id: 'f2', 
        title: '25. 三大报表解密：公司的体检报告', 
        duration: '30分钟', 
        icon: 'fa-file-invoice', 
        visualType: 'three-statements', 
        description: '资产、利润与现金流的三角关系。', 
        content: '利润表看面子（赚多少），资产负债表看里子（欠多少），现金流量表看日子（活多久）。最真实的是“经营性现金流”。', 
        practicalTask: '下载一份财报，对比它的“净利润”和“经营性现金流净额”，看看有没有水分。', 
        analogy: '工资单、房产证和微信钱包流水。', 
        expertTip: '利润可以画出来，但现金流极难造假。',
        keyTerms: [
          { term: '资产负债率', definition: '负债总额/资产总额，反映财务稳健性。' }
        ] 
      },
      { 
        id: 'f3', 
        title: '26. 护城河分析：竞争优势的防线', 
        duration: '25分钟', 
        icon: 'fa-fort-awesome', 
        visualType: 'moat-radar', 
        description: '识别品牌、网络效应与转换成本。', 
        content: '品牌（如茅台）、网络效应（如微信）、低成本（如顺丰）。护城河决定了利润是否会被对手蚕食。', 
        practicalTask: '为你最喜欢的一家公司画出它的护城河雷达图。', 
        analogy: '城堡周围的深沟，防止竞争对手掠夺你的利润。', 
        keyTerms: [
          { term: 'ROE', definition: '净资产收益率，衡量公司运用自有资本赚钱的效率。' }
        ] 
      },
      {
        id: 'f4',
        title: '27. 行业生命周期分析',
        duration: '20分钟',
        icon: 'fa-hourglass-half',
        description: '导入期、成长期、成熟期、衰退期。',
        content: '成长期赚市盈率提升的钱，成熟期赚分红的钱。不要在衰退期博反弹。',
        practicalTask: '判断：AI芯片、传统白电、煤炭分别处于哪个阶段？',
        analogy: '春耕、夏种、秋收、冬藏。',
        keyTerms: [{ term: '寡头垄断', definition: '少数几家巨头占据市场绝大部分份额。' }]
      },
      {
        id: 'f5',
        title: '28. 管理层治理与股权激励',
        duration: '20分钟',
        icon: 'fa-user-tie',
        description: '看人比看数更重要。',
        content: '大股东持股比例是否合理？有没有股权激励计划？管理层是在努力干活还是在套现离场？',
        practicalTask: '在财报中找到“前十大股东”，看看有没有国家队或知名社保基金入驻。',
        analogy: '投资就像买球队，不仅看球星，还得看教练和老板。',
        keyTerms: [{ term: '关联交易', definition: '上市公司与大股东控制的其他企业之间的交易，可能存在利益输送风险。' }]
      }
    ]
  },
  {
    stage: CourseStage.MACRO,
    lessons: [
      { 
        id: 'm1', 
        title: '29. 利率与重力：股市定价锚点', 
        duration: '20分钟', 
        icon: 'fa-faucet', 
        visualType: 'interest-rate-seesaw', 
        description: '理解流动性的闸门。', 
        content: '利率是股市的重力。美联储加息，全球资产估值下行；中国降息，流动性改善。盯紧“十年期美债收益率”。', 
        practicalTask: '查阅LPR利率最近的变动，思考它对房地产和股市的影响。', 
        analogy: '水涨船高，利率就是水的深度。', 
        keyTerms: [
          { term: '流动性', definition: '市场中资金的充裕程度及资产变现的难易程度。' }
        ] 
      },
      { 
        id: 'm2', 
        title: '30. 美林时钟：寻找周期的春夏秋冬', 
        duration: '25分钟', 
        icon: 'fa-clock-rotate-left', 
        visualType: 'merrill-clock', 
        description: '在对的时间配置对的资产。', 
        content: '复苏买股，过热买商品，滞胀拿现金，衰退买债券。这是资产配置的圣经。', 
        practicalTask: '分析：当前全球经济处于时钟的哪个象限？', 
        analogy: '农民不会在冬天播种，投资者也不该在滞胀期重仓高溢价股。', 
        keyTerms: [
          { term: '滞胀', definition: '低增长与高通胀并存的极端糟糕时期。' }
        ] 
      },
      {
        id: 'm3',
        title: '31. 通货膨胀：财富的窃贼',
        duration: '20分钟',
        icon: 'fa-money-bill-transfer',
        description: 'CPI 与 PPI 意味着什么？',
        content: '通胀会侵蚀购买力，但温和通胀对消费和制造业是利好。严重通胀会导致暴力加息，股市崩盘。',
        practicalTask: '查询最近三年的CPI走势，看看它与食品饮料板块走势是否有相关性。',
        analogy: '通胀就像一个偷偷往你水桶里倒水的贼，水变淡了但总量没变。',
        keyTerms: [{ term: 'CPI', definition: '消费者价格指数，衡量居民生活成本。' }]
      },
      {
        id: 'm4',
        title: '32. 汇率波动与跨境资产',
        duration: '20分钟',
        icon: 'fa-earth-americas',
        description: '人民币贬值还是升值？',
        content: '汇率影响出口企业的业绩，也决定了外资（北向资金）的去留。人民币贬值通常压制大盘指数。',
        practicalTask: '观察离岸人民币汇率跳水时，沪深300指数当天的表现。',
        analogy: '就像去国外旅游，汇率变了，你的购买力就变了。',
        keyTerms: [{ term: '汇兑损益', definition: '因汇率变动而产生的报表盈亏。' }]
      },
      {
        id: 'm5',
        title: '33. 康波周期：人生发财靠周期',
        duration: '25分钟',
        icon: 'fa-infinity',
        description: '站在时代的大浪潮上。',
        content: '每个人一生只有两三次大机会。技术革命（如AI）带来的长周期增长是无法阻挡的。',
        practicalTask: '查阅“康德拉季耶夫周期”，思考下一次技术爆发点在哪里。',
        analogy: '在上升的电梯里做俯卧撑，真正让你上升的是电梯。',
        keyTerms: [{ term: '全要素生产率', definition: '衡量经济增长效率及技术进步的核心指标。' }]
      }
    ]
  },
  {
    stage: CourseStage.STRATEGY,
    lessons: [
      { 
        id: 's1', 
        title: '34. 交易系统：拒绝随机买卖', 
        duration: '25分钟', 
        icon: 'fa-gears', 
        visualType: 'position-simulator', 
        description: '建立可复制的赢钱逻辑。', 
        content: '高手不靠直觉。明确买入点、卖出点、最大仓位。纪律远比预测更重要。', 
        practicalTask: '写下你的第一条军规：比如“跌破MA20必须离场”。', 
        analogy: '交易系统就像自动提款机，只要符合逻辑，它就吐钱。', 
        keyTerms: [
          { term: '盈亏比', definition: '预期盈利与预期亏损的比例，通常要求大于3:1。' }
        ] 
      },
      { 
        id: 's2', 
        title: '35. 选股策略：白马、黑马与题材', 
        duration: '20分钟', 
        icon: 'fa-money-bill-trend-up', 
        description: '你的性格适合哪种打法？', 
        content: '稳健型选大蓝筹分红；进阶型选细分龙头高成长；激进型选短线题材。千万不要混淆打法。', 
        practicalTask: '选择一支股，说明你是基于业绩（价值）买入的，还是基于图表（技术）买入的。', 
        analogy: '选股就像选对象，有人看重家境（财报），有人看重潜力（成长性）。', 
        keyTerms: [
          { term: '阿尔法收益', definition: '通过选股获得的超过市场基准的超额收益。' }
        ] 
      },
      {
        id: 's3',
        title: '36. 网格交易法：震荡市的自动机',
        duration: '25分钟',
        icon: 'fa-table-cells',
        visualType: 'grid-trading-viz',
        description: '在无聊的波动中反复收割。',
        content: '适合在大盘窄幅震荡时，分批挂单。通过频繁的低买高卖锁定利润，适合ETF。',
        practicalTask: '设定一个网格计划，并在模拟器中运行，看看在横盘市场中的效果。',
        analogy: '就像在河边拉了一张大网，鱼（价格）游来游去就被网住了。',
        keyTerms: [{ term: '中枢价', definition: '网格策略的基准参考点。' }]
      },
      {
        id: 's4',
        title: '37. 资产再平衡：反直觉的高抛低吸',
        duration: '20分钟',
        icon: 'fa-arrows-rotate',
        visualType: 'rebalance-viz',
        description: '强制执行盈利兑现。',
        content: '设定固定的股债比例（如6:4）。股市涨多了，卖掉一部分买债；股市跌多了，卖掉债补股。',
        practicalTask: '为你的资产组合设定比例，并尝试进行一次季度的动态平衡。',
        analogy: '就像修剪盆景，长太快的剪掉，长太慢的补齐，整体才能壮大。',
        keyTerms: [{ term: '被动再平衡', definition: '不看行情，只根据预设的时间点或比例点进行的强制调整。' }]
      },
      {
        id: 's5',
        title: '38. 复盘：交易者的进化捷径',
        duration: '20分钟',
        icon: 'fa-note-sticky',
        description: '总结每一笔亏损的真实原因。',
        content: '不复盘的投资是盲目的。记录买入逻辑、买入时的情绪、最终的结果。找出重复犯错的地方并改正。',
        practicalTask: '写一份上一周的交易周报，总结三次最关键的决策。',
        analogy: '运动员赛后看录像回放，找出技术动作的漏洞。',
        keyTerms: [{ term: '归因分析', definition: '分析收益是来自于运气、市场上涨还是自己的能力。' }]
      }
    ]
  },
  {
    stage: CourseStage.RISK,
    lessons: [
      { 
        id: 'r1', 
        title: '39. 止损：投资者的保险丝', 
        duration: '20分钟', 
        icon: 'fa-shield-halved', 
        description: '学会止损，拒绝套牢。', 
        content: '亏50%需要涨100%才能回本。止损能确保你永远有下一次玩的机会。核心原则：亏损7%-10%必须强制离场。', 
        practicalTask: '找一个被腰斩的股票，算算如果在跌10%时止损，你省下了多少本金。', 
        analogy: '赛车的安全带，平时觉得勒得慌，关键时刻能保命。', 
        expertTip: '买入时不仅要定买入价，更要先定好止损价。',
        keyTerms: [
          { term: '最大回撤', definition: '资产净值从最高点下滑的最大幅度，衡量抗风险能力。' }
        ] 
      },
      { 
        id: 'r2', 
        title: '40. 仓位管理：不要一次性梭哈', 
        duration: '20分钟', 
        icon: 'fa-boxes-stacked', 
        description: '分批建仓的艺术。', 
        content: '仓位决定心态。一次性买入会让你失去机动性。通过“334法”或金字塔式建仓，降低平均成本。', 
        practicalTask: '练习将10万资金分三次买入，分别设定不同的买入条件。', 
        analogy: '不要把所有鸡蛋放进一个篮子里。', 
        keyTerms: [
          { term: '梭哈', definition: '全仓买入。极度危险，通常意味着失去了容错空间。' }
        ] 
      },
      {
        id: 'r3',
        title: '41. 凯利公式：下注多少才科学？',
        duration: '20分钟',
        icon: 'fa-divide',
        description: '数学之神教你管理筹码。',
        content: '公式：f* = (bp - q) / b。它告诉你即便你有60%胜率，也不该押上全部家产，防止小概率连黑导致爆仓。',
        practicalTask: '根据你最近的胜率和平均赔率，代入凯利公式算算你的理想单笔仓位。',
        analogy: '就像在赌场，你有胜算也要控制筹码，防止一波被带走。',
        keyTerms: [{ term: '破产风险', definition: '即便胜率超过50%，因仓位过重而导致账户清零的可能性。' }]
      },
      {
        id: 'r4',
        title: '42. 极端风险识别：黑天鹅防线',
        duration: '15分钟',
        icon: 'fa-heart-crack',
        description: '做最坏的打算。',
        content: '识别系统性风险。如果大盘崩盘、公司暴雷，你的预案是什么？保持一定比例的现金储备永远是明智的。',
        practicalTask: '列出你持仓股中可能出现的最大“黑天鹅”（如财务造假、行业禁令）。',
        analogy: '就像造桥，必须能承载比预期大得多的重量，桥才安全。',
        keyTerms: [{ term: '系统性风险', definition: '指对整个市场产生影响且无法通过分散化投资消除的风险。' }]
      }
    ]
  },
  {
    stage: CourseStage.FUNDS,
    lessons: [
      { 
        id: 'u1', 
        title: '43. ETF 投资：最适合新人的武器', 
        duration: '25分钟', 
        icon: 'fa-layer-group', 
        visualType: 'portfolio-pie', 
        description: '买入整个行业的共识。', 
        content: 'ETF 是一篮子股票。沪深300、标普500、纳指ETF。不用选股，只需选行业和方向。费率低，流动性好。', 
        practicalTask: '搜索“标普500 ETF”和“沪深300 ETF”的长期曲线，对比两者的波动率。', 
        analogy: '买入整个菜市场，而不是挑某一颗白菜。', 
        keyTerms: [
          { term: '定投', definition: '定期定额投资，通过拉长时间维度平摊买入成本。' }
        ] 
      },
      {
        id: 'u2',
        title: '44. 主动基金：寻找“基神”的成本',
        duration: '20分钟',
        icon: 'fa-user-tie',
        description: '理解基金经理的局限性。',
        content: '买主动基金是在买“人”。关注基金经理的从业年限、投资风格和历史最大回撤。警惕基金规模过大导致的操作变形。',
        practicalTask: '在软件中查阅你关注的基金经理在过去五年的年化收益，看它跑赢基准了吗？',
        analogy: '就像雇佣私人厨师，他可能做出大餐，但也可能因为状态不好把菜做咸。',
        keyTerms: [{ term: '管理费', definition: '支付给基金公司的固定年度运营成本。' }]
      },
      {
        id: 'u3',
        title: '45. 定投微笑曲线：穿越牛熊的秘籍',
        duration: '20分钟',
        icon: 'fa-face-smile',
        description: '在下跌中累积廉价份额。',
        content: '定投不怕跌，因为跌的时候你买到了更多份额。只要市场能回来，你回本的速度会远超一次性买入的人。',
        practicalTask: '手动计算：如果净值从1元跌到0.5元再回升到0.8元，定投的收益情况。',
        analogy: '就像打折季买衣服，价格越低你买得越多。',
        keyTerms: [{ term: '份额', definition: '基金资产的计量单位。' }]
      },
      {
        id: 'u4',
        title: '46. 债券基金：稳健的压舱石',
        duration: '20分钟',
        icon: 'fa-landmark',
        description: '追求细水长流的收益。',
        content: '纯债基金波动极小，适合存放暂时不用的生活费。注意：债券也会因为利率上升而下跌。',
        practicalTask: '对比一个“短债基金”和一个“混合型基金”的年度波动图。',
        analogy: '股票是海上的风浪，债券是岸边的礁石。',
        keyTerms: [{ term: '到期收益率', definition: '持有债券至到期时可以获得的年化收益率。' }]
      },
      {
        id: 'u5',
        title: '47. 跨境 ETF：全球视野的配置',
        duration: '20分钟',
        icon: 'fa-plane-up',
        description: '不仅看 A 股，还要看纳斯达克。',
        content: '通过 QDII 基金配置全球资产。在人民币汇率波动时，这是一种极佳的风险对冲工具。',
        practicalTask: '查阅“纳指ETF”在美联储加息和降息周期中的不同表现。',
        analogy: '不要把所有鸡蛋放进同一个国家的篮子里。',
        keyTerms: [{ term: 'QDII', definition: '合格境内机构投资者，允许内地居民投资境外市场。' }]
      }
    ]
  },
  {
    stage: CourseStage.SECTOR,
    lessons: [
      {
        id: 'sc1',
        title: '48. 科技股深度：买的是研发还是概念？',
        duration: '25分钟',
        icon: 'fa-microchip',
        visualType: 'sector-map-viz',
        description: '高研投背后的高风险。',
        content: '看科技股核心指标：研投占比、专利壁垒、摩尔定律。科技股是典型的“赢家通吃”。',
        practicalTask: '对比英伟达和另一家显卡公司的研发费用，思考为什么英伟达能垄断。',
        analogy: '投资科技股就像压注一个未来的爱因斯坦。',
        keyTerms: [
          { term: '护城河', definition: '由专利、算法、品牌等构建的竞争壁垒。' }
        ]
      },
      {
        id: 'sc2',
        title: '49. 消费股深度：提价权的魅力',
        duration: '20分钟',
        icon: 'fa-cart-shopping',
        description: '长牛板块的生存之道。',
        content: '消费股核心看：品牌粘性、存货周转。最强的公司拥有“抗通胀提价权”。',
        practicalTask: '思考：为什么可口可乐几十年不怎么涨价，而某些白酒每年都在涨？',
        analogy: '消费股就像一棵果树，只要有人要吃果子，它就能一直结。',
        keyTerms: [
          { term: '毛利率', definition: '衡量产品竞争力和品牌溢价的核心指标。' }
        ]
      },
      {
        id: 'sc3',
        title: '50. 周期行业：在冷门时潜伏',
        duration: '20分钟',
        icon: 'fa-truck-field',
        description: '煤炭、海运与有色金属。',
        content: '周期股业绩波动剧烈。必须在“哀鸿遍野”时买入，在“业绩爆发”时果断离场。绝对不要看 PE 买周期。',
        practicalTask: '查阅波罗的海干散货指数（BDI），观察它与海运股的关联度。',
        analogy: '就像过年买年货，要在淡季（价格低）买，旺季（价格高）出局。',
        keyTerms: [{ term: '顺周期', definition: '与宏观经济波动方向一致且弹性巨大的行业。' }]
      }
    ]
  },
  {
    stage: CourseStage.WEALTH,
    lessons: [
      {
        id: 'w1',
        title: '51. 复利：时间才是终极武器',
        duration: '20分钟',
        icon: 'fa-arrow-up-right-dots',
        visualType: 'compounding-viz',
        description: '理解 1.01 的 365 次方。',
        content: '复利不是暴利，而是长期坚持。早投资十年，结局天差地别。保持 10% 的年化，7 年资产翻倍。',
        practicalTask: '使用复利计算器，计算你每月定投1000元，年化10%，30年后是多少。',
        analogy: '复利就像滚雪球，坡要长（时间），雪要湿（收益率）。',
        keyTerms: [
          { term: '72法则', definition: '估算资产翻倍所需时间的简便方法：72 / 年化收益率。' }
        ]
      },
      {
        id: 'w2',
        title: '52. 生命周期财务规划',
        duration: '25分钟',
        icon: 'fa-person-walking-arrow-right',
        description: '不同年龄段的风险敞口。',
        content: '20岁可以高风险高弹性；40岁需要稳健保本；60岁重分红现金流。建立你的财富金字塔。',
        practicalTask: '画出一张你未来五年的资产配置蓝图，分层标注风险级别。',
        analogy: '人生像打牌，前期拿好牌（人力资本），后期留好钱（财务资本）。',
        keyTerms: [
          { term: '人力资本', definition: '你未来赚钱能力的现值。年轻人最大的资产是自己。' }
        ]
      },
      {
        id: 'w3',
        title: '53. 税务筹划与非法诈骗识别',
        duration: '15分钟',
        icon: 'fa-hand-holding-dollar',
        description: '守护你的财富果实。',
        content: '避开“非法荐股”、“高息理财”。理解个人养老金账户的节税逻辑。合法避税本身就是一种确定性的盈利。',
        practicalTask: '查询个人养老金制度，计算你所在的收入档位每年能省多少个税。',
        analogy: '理财像修桶，补好漏洞（税和骗局）比拼命往里倒水更有用。',
        keyTerms: [{ term: '庞氏骗局', definition: '利用新投资人的钱支付老投资人的利息，直至崩盘。' }]
      }
    ]
  },
  {
    stage: CourseStage.ADVANCED,
    lessons: [
      { 
        id: 'a1', 
        title: '54. 期权与期货：风险的对冲', 
        duration: '30分钟', 
        icon: 'fa-bolt-lightning', 
        description: '理解杠杆的终极体现。', 
        content: '合约是权利也是义务。理解它是为了看清机构如何对冲。新手绝对不要加杠杆，直到你彻底理解爆仓风险。', 
        practicalTask: '模拟计算一份“看涨期权”在股价上涨10%时的理论收益率。', 
        analogy: '就像房子的定金，你拥有了以锁定价格买房的权利。', 
        expertTip: '期权是买保险，不是去豪赌。',
        keyTerms: [
          { term: '隐含波动率', definition: '市场对未来波动的预期，是期权定价的核心。' }
        ] 
      },
      {
        id: 'a2',
        title: '55. 终极课程：投资是一场修行',
        duration: '30分钟',
        icon: 'fa-mountain-sun',
        description: '建立终身学习的护城河。',
        content: '决定收益的是你的认知边界。在这个快速变化的时代，理性的心态是你最核心的资产。知行合一，方能长久。',
        practicalTask: '写一份个人的年度投资计划，包括你的财务目标、风险底线和学习清单。',
        analogy: '投资就像跑马拉松，终点只对那些一直跑的人有意义。',
        expertTip: '最好的投资永远是投资你自己。',
        keyTerms: [
          { term: '知行合一', definition: '认知到操作的统一，是投资者的最高境界。' }
        ]
      }
    ]
  }
];
