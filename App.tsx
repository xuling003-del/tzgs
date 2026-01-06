
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './constants';
import { UserProgress, Lesson } from './types';
import CourseCard from './components/CourseCard';
import LessonViewer from './components/LessonViewer';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('user_investment_progress_v2');
    return saved ? JSON.parse(saved) : { completedLessons: [], currentLessonId: 'b1' };
  });

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(() => {
    const id = progress.currentLessonId || 'b1';
    for (const mod of COURSE_MODULES) {
      const found = mod.lessons.find(l => l.id === id);
      if (found) return found;
    }
    return COURSE_MODULES[0].lessons[0];
  });

  useEffect(() => {
    localStorage.setItem('user_investment_progress_v2', JSON.stringify(progress));
  }, [progress]);

  const handleLessonSelect = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setProgress(prev => ({ ...prev, currentLessonId: lesson.id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = (id: string) => {
    let nextCompleted = progress.completedLessons;
    if (!progress.completedLessons.includes(id)) {
      nextCompleted = [...progress.completedLessons, id];
      setProgress(prev => ({
        ...prev,
        completedLessons: nextCompleted
      }));
    }
    
    // 自动寻找下一课
    const allLessons = COURSE_MODULES.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === id);
    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      setActiveLesson(next);
      setProgress(prev => ({ ...prev, currentLessonId: next.id, completedLessons: nextCompleted }));
    }
  };

  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completionRate = Math.round((progress.completedLessons.length / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-8 flex flex-col">
      {/* 顶部导航 */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <h1 className="text-lg font-black text-white tracking-tighter">
                财智启航 <span className="text-indigo-400 font-medium text-xs hidden sm:inline ml-2 border-l border-slate-700 pl-2">职场新人系统投教</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">课程总进度</span>
                <span className="text-xs text-white font-bold">{completionRate}%</span>
              </div>
              <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-1000 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-700">
              {progress.completedLessons.length} / {totalLessons} 课时已通关
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 左侧导航栏 */}
          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1 h-fit lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
            {COURSE_MODULES.map((module, idx) => (
              <div key={module.stage} className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-slate-800 text-slate-400 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black border border-slate-700">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
                      {module.stage}
                    </h2>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {module.lessons.filter(l => progress.completedLessons.includes(l.id)).length} / {module.lessons.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {module.lessons.map(lesson => (
                    <CourseCard 
                      key={lesson.id}
                      lesson={lesson}
                      isCompleted={progress.completedLessons.includes(lesson.id)}
                      isActive={activeLesson?.id === lesson.id}
                      onClick={() => handleLessonSelect(lesson)}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* 成就勋章卡片 */}
            <div className="bg-white p-8 rounded-3xl border border-dashed border-slate-200 flex flex-col items-center text-center group transition-all hover:bg-indigo-50/30">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h3 className="font-bold text-slate-800">终极投资入场券</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                完成所有课程后，您将解锁系统化的投资框架思维导图。
              </p>
            </div>
          </aside>

          {/* 右侧课程正文 */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            {activeLesson ? (
              <LessonViewer 
                lesson={activeLesson} 
                onComplete={handleComplete}
              />
            ) : (
              <div className="bg-white rounded-3xl h-96 flex flex-col items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-book-open-reader text-4xl opacity-20"></i>
                </div>
                <p className="font-medium">请从侧边栏选择一个课时开始您的旅程</p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* 移动端进度条 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between sm:hidden z-40 shadow-2xl">
        <div className="flex-1 mr-4">
          <div className="flex justify-between text-[10px] mb-1 font-bold text-slate-500">
            <span>学习进度</span>
            <span>{completionRate}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>
        <button 
          className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
        >
          <i className="fa-solid fa-list-ul"></i>
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default App;
