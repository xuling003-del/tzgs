/**
 * 课程数据种子工具
 * 用于初始化默认课程数据
 */
import { courseManager } from '../services/CourseManager';

export class CourseDataSeeder {
  /**
   * 初始化默认课程数据
   */
  static seedDefaultCourses() {
    // 检查是否已有课程数据
    const existingCourses = courseManager.getCourses();
    if (existingCourses.length > 0) {
      console.log('已有课程数据，跳过初始化');
      return;
    }

    // 添加默认课程
    const defaultCourses = [
      {
        id: 'finance-basics-101',
        title: '理财投资基础',
        description: '学习理财投资的基本概念和策略',
        category: 'finance',
        difficulty: 'beginner',
        duration: 180
      },
      {
        id: 'stock-investing',
        title: '股票投资实战',
        description: '深入学习股票市场的投资策略和技巧',
        category: 'investing',
        difficulty: 'intermediate',
        duration: 240
      }
    ];

    defaultCourses.forEach(course => {
      courseManager.addCourse({
        title: course.title,
        description: course.description,
        category: course.category,
        difficulty: course.difficulty,
        duration: course.duration
      });
    });

    console.log('默认课程数据初始化完成');
  }

  /**
   * 添加示例模块到课程
   */
  static seedCourseModules() {
    // 为理财基础课程添加模块
    const basicCourse = courseManager.getCourses().find(c => c.title === '理财投资基础');
    if (basicCourse) {
      courseManager.addModuleToCourse(basicCourse.id, {
        title: '理财概述',
        content: '理财是指对财务（主要是现金）进行管理，以实现财务的保值、增值...',
        type: 'text',
        order: 1
      });
      
      courseManager.addModuleToCourse(basicCourse.id, {
        title: '预算规划',
        content: '预算规划是理财的第一步，需要明确收入和支出...',
        type: 'text',
        order: 2
      });
    }

    // 为股票投资课程添加模块
    const stockCourse = courseManager.getCourses().find(c => c.title === '股票投资实战');
    if (stockCourse) {
      courseManager.addModuleToCourse(stockCourse.id, {
        title: '股票基础',
        content: '股票是股份公司为筹集资金而发行给各个股东作为持股凭证并借以取得股息和红利的一种有价证券...',
        type: 'text',
        order: 1
      });
      
      courseManager.addModuleToCourse(stockCourse.id, {
        title: '市场分析',
        content: '技术分析和基本面分析是股票投资的两大分析方法...',
        type: 'text',
        order: 2
      });
    }

    // 从constants.tsx提取的课程内容添加为模块
    this.addConstantsContentAsModules();
    
    console.log('课程模块初始化完成');
  }

  /**
   * 从constants.tsx提取的课程内容添加为模块
   */
  static addConstantsContentAsModules() {
    // 情绪控制课程
    const emotionControlCourse = courseManager.getCourses().find(c => c.title === '情绪控制与心理管理');
    if (!emotionControlCourse) {
      const newCourse = courseManager.addCourse({
        title: '情绪控制与心理管理',
        description: '学习投资中的情绪控制和心理管理技巧',
        category: 'psychology',
        difficulty: 'intermediate',
        duration: 120
      });

      // 添加情绪控制相关模块
      courseManager.addModuleToCourse(newCourse.id, {
        title: '情绪控制基础',
        content: `**情绪控制的重要性**\n\n在投资过程中，情绪控制是决定投资成败的关键因素。贪婪和恐惧是投资者最大的敌人，它们会导致非理性决策，进而造成亏损。\n\n**情绪的两大敌人**\n\n1. **贪婪**：\n   - 过度追求收益,忽视风险\n   - 会导致追涨杀跌、重仓操作\n   - 不及时止盈,错失卖出时机\n   - 盲目追求高收益,忽视本金安全\n\n2. **恐惧**：\n   - 过度担心亏损,错失机会\n   - 会导致杀跌、空仓、不敢买等行为\n   - 无法坚持投资计划\n   - 在市场底部恐慌性卖出\n\n**对抗方法**：\n     - 制定计划：买入前制定详细的交易计划\n     - 严格执行：不受情绪影响,严格执行计划\n     - 长期视角：关注公司基本面,而非短期波动\n     - 分批买入：下跌时分批买入,降低成本\n     - 学习知识：提高投资水平,增强信心\n\n**情绪控制技巧**\n\n1. **制定交易计划**：\n   - 买入前设定止损止盈\n   - 制定详细的入场和出场规则\n   - 严格执行,不受情绪影响\n   - 定期回顾和调整计划\n\n2. **保持距离**：\n   - 不要频繁看盘,每天看一次即可\n   - 减少市场噪音干扰,关注核心信息\n   - 避免过度关注短期波动\n   - 专注于长期投资目标\n\n3. **分散注意力**：\n   - 培养其他兴趣爱好,不要让投资占据全部生活\n   - 运动、阅读、旅行等,保持身心健康\n   - 与家人朋友交流,获得情感支持\n   - 保持工作生活平衡\n\n4. **记录交易日记**：\n   - 记录交易时的情绪状态\n   - 分析情绪对决策的影响\n   - 总结成功和失败的经验\n   - 不断改进情绪控制能力\n\n5. **冥想和正念**：\n   - 每天冥想10-15分钟,提高专注力\n   - 练习正念,观察自己的情绪变化\n   - 学会在压力下保持冷静\n   - 提高情绪觉察能力\n\n6. **设定合理预期**：\n   - 不要期望一夜暴富\n   - 设定合理的收益目标\n   - 接受市场的波动性\n   - 保持耐心和长期视角\n\n**情绪失控的信号**\n\n- 频繁交易,无法控制\n- 失眠、焦虑、压力大\n- 盲目自信或极度悲观\n- 违反交易纪律\n- 情绪影响日常生活\n- 无法理性思考\n\n**情绪失控的应对**\n\n- 立即停止交易,冷静下来\n- 深呼吸,放松身心\n- 回顾交易计划,回归理性\n- 分析失控原因,总结经验\n- 必要时寻求专业帮助`,
        type: 'text',
        order: 1
      });
      
      courseManager.addModuleToCourse(newCourse.id, {
        title: '做空操作注意事项',
        content: `**做空操作的注意事项：专业投资者的必修课**\n\n做空操作对投资者的专业素养和风险承受能力要求极高，以下注意事项必须牢记：\n\n1. **权限要求**：只能在开通融资融券账户后操作，且需要满足资产规模（通常≥50万元）和交易经验（≥6个月）的要求。\n\n2. **适合人群**：仅适合有丰富投资经验、风险承受能力强、能够承受较大亏损的专业投资者。新手投资者不建议尝试做空。\n\n3. **仓位控制**：严格控制仓位，单只股票做空仓位不超过总资金的10%，总体做空仓位不超过总资金的30%。\n\n4. **止损纪律**：设置严格的止损位，一旦股价上涨触及止损位，立即止损离场，不要抱有侥幸心理。\n\n5. **先学会做多**：在充分理解市场规律、掌握基本面分析和技术分析方法之前，不要轻易尝试做空。\n\n2. **模拟交易先行**：在模拟交易软件中尝试做空操作，熟悉流程和风险，积累经验后再考虑实盘。\n\n3. **小资金试水**：如果确实想做空，先用小资金试水，严格控制仓位，不要投入过多资金。\n\n4. **学习专业知识**：深入学习做空相关的专业知识，包括融资融券规则、风险控制方法、市场分析技巧等。\n\n5. **寻求专业建议**：在做空前咨询专业的投资顾问或经验丰富的投资者，听取他们的建议。\n\n记住，投资是一场马拉松，而非百米冲刺。活下来比赚大钱更重要，而做空操作往往与"活下来"的目标背道而驰。敬畏市场，谨慎做空，才能在投资路上走得更远。`,
        type: 'text',
        order: 2
      });
    }

    // 止损止盈课程
    const riskControlCourse = courseManager.getCourses().find(c => c.title === '止损止盈与风险控制');
    if (!riskControlCourse) {
      const newCourse = courseManager.addCourse({
        title: '止损止盈与风险控制',
        description: '学习止损止盈策略和风险控制方法',
        category: 'risk-management',
        difficulty: 'intermediate',
        duration: 90
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '止损止盈策略',
        content: `practicalTask: '为你的自选股设定一个"如果跌破 XX 元我就立刻卖出"的价格，并在软件里设置预警。',\n        analogy: '止损就像是赛车上的安全带，平时觉得勒，出事能保命；止盈就像是到达目的地后及时停车，不要贪心继续开到悬崖边；盈亏比就像是导航系统，告诉你每一段路程的风险和收益。',\n        expertTip: '亏损50%需要涨100%才能回本，亏损75%需要涨300%才能回本。保护本金是第一要务，止损是保护本金的唯一方法。记住：活下来比赚大钱更重要。',\n        keyTerms: [\n          { term: '盈亏比', definition: '预期盈利与潜在亏损的比率，是衡量交易质量的核心指标。最低要求≥2:1，理想水平≥3:1。即使胜率不高，只要盈亏比高，也能长期盈利。' },\n          { term: '固定比例止损', definition: '设定固定亏损比例（如7%、10%、15%）的止损方法。优点是简单易用，适合新手；缺点是可能被震荡洗出。适用于短线交易、趋势不明朗时。' }`,
        type: 'text',
        order: 1
      });
    }

    // 交易对手分析课程
    const marketParticipantsCourse = courseManager.getCourses().find(c => c.title === '市场参与者分析');
    if (!marketParticipantsCourse) {
      const newCourse = courseManager.addCourse({
        title: '市场参与者分析',
        description: '了解各类市场参与者的特征和行为模式',
        category: 'market-analysis',
        difficulty: 'intermediate',
        duration: 150
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '机构投资者分析',
        content: `content: '在股票市场中，了解谁是你的对手盘，谁在影响股价，是投资成功的关键。市场参与者就像一个复杂的生态系统，每个参与者都有自己的行为模式和资金实力。了解他们的特点，才能在市场中游刃有余，避免成为被收割的对象。\\n\\n## 一、机构投资者：市场的中流砥柱\\n\\n机构投资者是市场的中流砥柱，他们资金量大、专业能力强、信息来源广，是影响市场走势的重要力量。了解机构投资者的行为模式，可以帮助投资者更好地把握市场机会。\\n\\n### 公募基金：大众资金的守护者\\n\\n公募基金是向大众募集资金进行投资的机构投资者，他们管理着数万亿的资金，是A股市场最重要的机构投资者之一。\\n\\n**公募基金的特点**：\\n- **资金规模大**：管理资金规模通常在数十亿到数千亿之间\\n- **投资风格稳健**：追求长期稳健收益，持股周期长\\n- **投资范围广**：可以投资股票、债券、货币市场等多种资产\\n- **信息披露透明**：定期公布持仓情况和业绩表现\\n- **监管严格**：受到证监会严格监管，运作规范\\n\\n**公募基金的投资策略**：\\n- **价值投资**：寻找被低估的优质公司，长期持有\\n-`,
        type: 'text',
        order: 1
      });
    }

    // 交易日记课程
    const tradingJournalCourse = courseManager.getCourses().find(c => c.title === '交易日记与复盘');
    if (!tradingJournalCourse) {
      const newCourse = courseManager.addCourse({
        title: '交易日记与复盘',
        description: '学习如何记录和分析交易过程',
        category: 'psychology',
        difficulty: 'intermediate',
        duration: 100
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '交易日记基础',
        content: `content: '交易日记是投资者成长的加速器，是将经验转化为能力的桥梁。通过系统化地记录和分析交易，投资者可以不断优化策略、提升心态、实现长期盈利。\\n\\n**交易日记的核心价值**：\\n- **客观记录**：建立完整的交易档案，避免记忆偏差\\n- **深度复盘**：发现成功和失败的深层原因\\n- **策略优化**：基于数据持续改进交易系统\\n- **心态提升**：识别情绪模式，培养理性决策\\n- **纪律强化**：监督交易执行，遵守交易规则\\n\\n**交易日记的核心要素**：\\n\\n1. **交易基本信息**：\\n   - 日期、时间（精确到分钟）\\n   - 股票代码、名称\\n   - 交易方向（买入/卖出）\\n   - 价格、数量、手续费\\n   - 盈亏金额、盈亏比例\\n   - 持仓时间\\n\\n2. **交易决策依据**：\\n   - **入场理由**：\\n     * 技术信号：突破、回踩、形态等\\n     * 基本面分析：业绩、估值、行业等\\n     * 市场环境：大盘走势、热点板块等\\n`,
        type: 'text',
        order: 1
      });
    }

    // 仓位管理课程
    const positionManagementCourse = courseManager.getCourses().find(c => c.title === '仓位管理策略');
    if (!positionManagementCourse) {
      const newCourse = courseManager.addCourse({
        title: '仓位管理策略',
        description: '学习仓位管理的方法和策略',
        category: 'risk-management',
        difficulty: 'intermediate',
        duration: 120
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '仓位管理基础',
        content: `content: '在投资的世界里，仓位管理（Position Management）是决定你能否长期生存的关键技能。很多新手认为，投资就是选对股票、买入持有，但实际上，即使选对了股票，如果仓位管理不当，也可能在波动中被迫止损，错失最终的上涨。作为职场新人，现金也是一种仓位。只有手里有余钱，你才有在低位"补刀"的资格。学会像指挥官一样管理你的"投资弹药库"，才能在不确定的市场中获得确定的收益。\\n\\n## 一、仓位管理的重要性：为什么不能一把梭哈\\n\\n仓位管理是指投资者根据自己的风险承受能力、市场环境和个人判断，合理分配资金在不同投资标的上的比例。它是投资决策中最重要的环节之一，直接决定了投资的风险和收益。\\n\\n### 仓位管理的核心价值\\n\\n1. **控制风险**：通过合理的仓位分配，可以控制单一股票或单一行业对整体投资组合的影响，避免因单一投资失败而造成重大损失。\\n\\n2. **保持流动性**：保留一定比例的现金仓位，可以在市场下跌时加仓，在出现更好的投资机会时及时介入。\\n\\n3. **提高收益**：通过动态调整仓位，可以在市场上涨时增加仓位获取更多收益，在市场下跌时减少仓位降低损失。\\n\\n4.`,
        type: 'text',
        order: 1
      });
    }

    // 波浪理论课程
    const waveTheoryCourse = courseManager.getCourses().find(c => c.title === '波浪理论分析');
    if (!waveTheoryCourse) {
      const newCourse = courseManager.addCourse({
        title: '波浪理论分析',
        description: '学习波浪理论及其在投资中的应用',
        category: 'technical-analysis',
        difficulty: 'advanced',
        duration: 180
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '波浪理论基础',
        content: `content: '波浪理论是由美国会计师拉尔夫·纳尔逊·艾略特在20世纪30年代创立的技术分析理论，是技术分析中最经典、最系统、最具哲学深度的理论之一。波浪理论认为，市场价格的波动遵循着某种自然的、有规律的节奏，这种节奏可以通过"波浪"的形式来识别和预测。波浪理论的核心思想是：市场价格的波动不是随机的，而是遵循着特定的模式和规律，这些模式和规律反映了市场参与者的心理变化和行为模式。对于刚入股市的新人来说，掌握波浪理论，就像拥有了一个能够洞察市场周期和趋势方向的"导航仪"，能够在市场的波动中把握节奏，预判趋势的转折点。\\n\\n## 一、波浪理论的基本原理：市场行为的自然规律\\n\\n波浪理论的基本原理是理解波浪理论的基础，掌握这些原理，能够帮助你正确识别和数浪。\\n\\n### 原理一：波浪的完整性\\n\\n**原理描述**：\\n- 一个完整的波浪周期由8个波浪组成\\n- 包括5个推动浪（1、2、3、4、5）和3个调整浪（A、B、C）\\n-`,
        type: 'text',
        order: 1
      });
    }

    // 认知偏差课程
    const cognitiveBiasCourse = courseManager.getCourses().find(c => c.title === '投资认知偏差');
    if (!cognitiveBiasCourse) {
      const newCourse = courseManager.addCourse({
        title: '投资认知偏差',
        description: '了解和克服投资中的认知偏差',
        category: 'psychology',
        difficulty: 'intermediate',
        duration: 90
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '认知偏差与心态',
        content: `content: '回顾你过去的跟风操作，是否有过"赚2%就卖，亏20%却装死"的经历？写下你当时的心理状态。同时，观察你身边的朋友或同事，记录他们因认知偏差而亏损的案例，分析他们犯了哪些错误。',\n        analogy: '投资心态就像是开车：新手盯着仪表盘（股价），老司机盯着远方的路况（价值）。认知偏差就像是车窗上的雾气，让你看不清路况，容易发生事故。只有擦亮车窗，才能看清前方的路。',\n        expertTip: '永远不要用你的闲钱去赌博，要用你的认知去换取溢价。记住，在投资领域，活下来比赚大钱更重要。战胜自己的心理弱点，比战胜市场更重要。',\n        keyTerms: [\n          { term: '幸存者偏差', definition: '只看到成功的案例，忽视了大量失败的基数。在投资领域，幸存者偏差表现为只看到赚钱的案例，而忽视了更多亏钱的案例，从而得出错误的结论。避免幸存者偏差的关键在于全面、客观地看待信息，寻找失败案例，关注概率而非个案。' }`,
        type: 'text',
        order: 1
      });
    }

    // 股票基础课程
    const stockBasicsCourse = courseManager.getCourses().find(c => c.title === '股票基础知识');
    if (!stockBasicsCourse) {
      const newCourse = courseManager.addCourse({
        title: '股票基础知识',
        description: '了解股票的本质和基本概念',
        category: 'basics',
        difficulty: 'beginner',
        duration: 120
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '股票的本质',
        content: `content: '在踏上投资之旅之前，让我们先深入理解手中握着的究竟是什么。股票，这个看似简单的金融工具，实则承载着深刻的商业逻辑与财富密码。\\n\\n**股票的本质：一份所有权的契约**\\n\\n股票并非一张冰冷的数字凭证，而是你与一家企业建立的所有权契约。当你买入某家公司的股票，你便正式成为了这家企业的股东，拥有了与其共同成长的权利。这份权利体现在两个核心维度：\\n\\n1. **分红权**：当企业盈利并决定向股东分配利润时，你将按持股比例获得相应的现金分红。这就像你投资了一家餐厅，每年都能按比例分享餐厅的利润。\\n\\n2. **投票权**：作为股东，你有权参与公司的重大决策，如选举董事会成员、审议重大经营事项等。这让你不仅是财富的分享者，更是企业命运的参与者。\\n\\n**股票类型：风险与收益的平衡艺术**\\n\\n股票世界并非千篇一律，不同类型的股票对应着不同的风险收益特征。理解这些差异，是构建合理投资组合的第一步。\\n\\n1.`,
        type: 'text',
        order: 1
      });
    }

    // 政策解读课程
    const policyAnalysisCourse = courseManager.getCourses().find(c => c.title === '政策解读与投资');
    if (!policyAnalysisCourse) {
      const newCourse = courseManager.addCourse({
        title: '政策解读与投资',
        description: '学习如何解读政策对投资的影响',
        category: 'macro-economics',
        difficulty: 'intermediate',
        duration: 150
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '政策跟踪与分析',
        content: `**反垄断调查**：反垄断调查，利空相关行业龙头。\\n\\n**六、实战应用：如何跟踪政策信号**\\n\\n1. **关注央行公告**\\n\\n央行每月会发布金融统计数据，包括M2、社融、信贷等数据。这些数据是判断货币政策松紧的重要依据。\\n\\n2. **关注政府工作报告**\\n\\n政府工作报告每年两会期间发布，是了解国家政策导向的重要文件。报告中提到的重点领域，往往是政策重点支持的领域。\\n\\n3. **关注政策文件**\\n\\n政府各部门会发布各种政策文件，包括产业政策、监管政策等。这些文件是了解政策导向的重要依据。\\n\\n4. **关注官员讲话**\\n\\n央行行长、货币政策委员会等官员的讲话，往往透露出未来的政策走向，需要密切关注。\\n\\n5. **关注市场反应**\\n\\n市场对政策的反应，往往反映了政策的实际影响。需要密切关注市场对政策的反应，及时调整投资策略。\\n\\n**给新人的建议**：\\n\\n政策解读虽然复杂，但核心逻辑很简单——跟着政策走。政策支持的行业，大胆布局；政策抑制的行业，谨慎回避。记住，在A股市场，政策是最大的变量，读懂政策才能读懂市场。`,
        type: 'text',
        order: 1
      });
    }

    // 市场参与者课程
    const participantsCourse = courseManager.getCourses().find(c => c.title === '市场参与者分析');
    if (!participantsCourse) {
      const newCourse = courseManager.addCourse({
        title: '市场参与者分析',
        description: '了解各类市场参与者的特点',
        category: 'market-analysis',
        difficulty: 'intermediate',
        duration: 100
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '机构与散户',
        content: `practicalTask: '查看龙虎榜，看看最近哪些股票被游资或机构大量买入？同时，关注北向资金净流入流出的情况，分析市场情绪。',\n        analogy: '机构就像大象，散户就像蚂蚁，游资就像狼群，国家队就像牧羊人。大象决定方向，蚂蚁跟随大象，狼群制造混乱，牧羊人维持秩序。',\n        expertTip: '不要试图战胜机构，要学会跟随机构。北向资金流向是重要的风向标，要密切关注。关注机构的持仓动向，可以帮助你把握市场机会。',\n        keyTerms: [\n          { term: '公募基金', definition: '向大众募集资金进行投资的机构投资者。资金规模大，投资风格稳健，追求长期稳健收益，持股周期长。是A股市场最重要的机构投资者之一。' },\n          { term: '私募基金', definition: '管理高净值客户资金的机构投资者。资金门槛高，投资策略灵活，追求超额收益。可以采用多种投资策略，包括做多、做空、套利等。' },\n          { term: 'QFII', definition: '合格境外机构投资者。代表国际资本进入A股市场，具有国际化的投资视野和经验。偏好白马股、价值投资，持股周期长。' }`,
        type: 'text',
        order: 1
      });
    }

    // 仓位管理实践课程
    const positionPracticeCourse = courseManager.getCourses().find(c => c.title === '仓位管理实践');
    if (!positionPracticeCourse) {
      const newCourse = courseManager.addCourse({
        title: '仓位管理实践',
        description: '实践仓位管理的具体方法',
        category: 'risk-management',
        difficulty: 'intermediate',
        duration: 90
      });

      courseManager.addModuleToCourse(newCourse.id, {
        title: '3-3-4建仓法',
        content: `practicalTask: '假如你有20,000元闲钱：计算你的"侦察兵"额度（30%）。如果你买入后股价立刻下跌5%，你会动用"援军"吗？为什么？同时，制定一个详细的仓位管理计划，包括初始仓位、加仓条件、止损点和止盈点。',\n        analogy: '仓位管理就像玩策略游戏：你不能在第一关就用光所有的蓝量（MP）。就像打游戏时，你需要保留一些技能和道具，以应对后面的BOSS战。投资也是一样，你需要保留一部分现金，以应对市场的波动和抓住新的投资机会。',\n        expertTip: '在不确定的市场里，仓位管理是唯一的确定性。记住，活下来比赚大钱更重要。只有手里有余钱，你才有在低位"补刀"的资格。永远不要一把梭哈，保留一部分现金仓位，以应对市场波动。',\n        keyTerms: [\n          { term: '头寸 (Position)', definition: '你在某种股票上投入的资金占总资金的比例。例如，你有10万元资金，买入2万元某只股票，那么这只股票的头寸就是20%。头寸管理是仓位管理的核心，通过合理分配不同股票的头寸，可以控制风险，提高收益。' }`,
        type: 'text',
        order: 1
      });
    }
  }

  /**
   * 运行完整的数据种子
   */
  static run() {
    this.seedDefaultCourses();
    this.seedCourseModules();
  }
}