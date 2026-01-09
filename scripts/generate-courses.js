const fs = require('fs');
const path = require('path');

// 课程文件夹路径
const COURSES_DIR = path.join(__dirname, '../kecheng');
// 输出文件路径
const OUTPUT_FILE = path.join(__dirname, '../src/data/courses-full.json');

// 阶段映射
const STAGE_MAP = {
  1: '股市通行证',
  2: '股市通行证',
  3: '股市通行证',
  4: '股市通行证',
  5: '股市通行证',
  6: '股市通行证',
  7: '股市通行证',
  8: '股市通行证',
  9: '股市通行证',
  10: '股市通行证',
  11: '财报门道',
  12: '财报门道',
  13: '财报门道',
  14: '财报门道',
  15: '财报门道',
  16: '财报门道',
  17: '财报门道',
  18: '财报门道',
  19: '财报门道',
  20: '财报门道',
  21: '宏观与行业',
  22: '宏观与行业',
  23: '宏观与行业',
  24: '宏观与行业',
  25: '宏观与行业',
  26: '宏观与行业',
  27: '实战技术课',
  28: '实战技术课',
  29: '实战技术课',
  30: '实战技术课',
  31: '实战技术课',
  32: '实战技术课',
  33: '实战技术课',
  34: '实战技术课',
  35: '实战技术课',
  36: '实战技术课',
  37: '高级实战课',
  38: '高级实战课',
  39: '高级实战课',
  40: '高级实战课',
  41: '高级实战课',
  42: '高级实战课',
  43: '风险管理',
  44: '风险管理',
  45: '风险管理',
  46: '风险管理',
  47: '风险管理',
  48: '基金与ETF投资',
  49: '基金与ETF投资',
  50: '基金与ETF投资',
  51: '基金与ETF投资',
  52: '基金与ETF投资',
  53: '交易系统构建',
  54: '交易系统构建',
  55: '交易系统构建',
  56: '量化投资入门'
};

// 解析Markdown文件
function parseMarkdownFile(filePath, lessonNumber) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 提取标题
  const titleMatch = content.match(/^## 课程\d+：(.+)$/m);
  const title = titleMatch ? titleMatch[1] : `课程${lessonNumber}`;
  
  // 提取时长
  const durationMatch = content.match(/时长[^：]+：([^\n]+)/m);
  const duration = durationMatch ? durationMatch[1].trim() : '25分钟';
  
  // 提取课程目标作为描述
  const descriptionMatch = content.match(/课程目标[^：]+：([^\n]+)/m);
  const description = descriptionMatch ? descriptionMatch[1].trim() : '暂无描述';
  
  // 提取实践任务
  const practicalTaskMatch = content.match(/## 七、实践任务[\s\S]+?## 八|## 七、实践任务[\s\S]+?$/m);
  let practicalTask = '暂无实践任务';
  if (practicalTaskMatch) {
    practicalTask = practicalTaskMatch[0].replace(/## 七、实践任务|## 八/g, '').trim();
  }
  
  // 提取专家建议
  const expertTipMatch = content.match(/## 九、专家建议与投资心态[\s\S]+?## 十|## 九、专家建议与投资心态[\s\S]+?$/m);
  let expertTip = '';
  if (expertTipMatch) {
    expertTip = expertTipMatch[0].replace(/## 九、专家建议与投资心态|## 十/g, '').trim();
  }
  
  // 提取关键概念
  const keyTermsMatch = content.match(/## 十、关键概念小词典[\s\S]+?$/m);
  const keyTerms = [];
  if (keyTermsMatch) {
    const termsContent = keyTermsMatch[0];
    // 提取表格内容
    const tableMatch = termsContent.match(/\|\s*术语\s*\|\s*定义\s*\|\s*\n\|\s*---\s*\|\s*---\s*\|\s*\n([\s\S]+)/m);
    if (tableMatch) {
      const tableContent = tableMatch[1];
      const rows = tableContent.split('\n').filter(row => row.trim());
      rows.forEach(row => {
        const columns = row.split('|').map(col => col.trim()).filter(col => col);
        if (columns.length === 2) {
          keyTerms.push({
            term: columns[0],
            definition: columns[1]
          });
        }
      });
    }
  }
  
  return {
    lessonNumber,
    title,
    duration,
    description,
    content,
    practicalTask,
    expertTip,
    keyTerms,
    stage: STAGE_MAP[lessonNumber] || '股市通行证'
  };
}

// 主函数
function generateCoursesData() {
  console.log('开始生成课程数据...');
  
  // 读取课程文件夹
  const files = fs.readdirSync(COURSES_DIR);
  
  // 筛选Markdown文件
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  // 解析所有Markdown文件
  const courses = [];
  for (const file of mdFiles) {
    // 提取课程编号
    const match = file.match(/课程(\d+)\.md/);
    if (match) {
      const lessonNumber = parseInt(match[1]);
      const filePath = path.join(COURSES_DIR, file);
      console.log(`正在处理课程 ${lessonNumber}: ${file}`);
      
      try {
        const courseData = parseMarkdownFile(filePath, lessonNumber);
        courses.push(courseData);
      } catch (error) {
        console.error(`处理课程 ${lessonNumber} 时出错:`, error.message);
      }
    }
  }
  
  // 按课程编号排序
  courses.sort((a, b) => a.lessonNumber - b.lessonNumber);
  
  // 生成最终的JSON数据
  const outputData = {
    courses,
    generatedAt: new Date().toISOString()
  };
  
  // 确保输出目录存在
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 写入JSON文件
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2), 'utf8');
  
  console.log(`课程数据生成完成！共处理 ${courses.length} 门课程`);
  console.log(`输出文件: ${OUTPUT_FILE}`);
}

// 执行主函数
generateCoursesData();