
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './constants';
import { UserProgress, Lesson } from './types';
import CourseCard from './components/CourseCard';
import LessonViewer from './components/LessonViewer';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('user_investment_progress');
    return saved ? JSON.parse(saved) : { completedLessons: [], currentLessonId: 'f1' };
  });

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(() => {
    const id = progress.currentLessonId || 'f1';
    for (const mod of COURSE_MODULES) {
      const found = mod.lessons.find(l => l.id === id);
      if (found) return found;
    }
    return COURSE_MODULES[0].lessons[0];
  });

  useEffect(() => {
    localStorage.setItem('user_investment_progress', JSON.stringify(progress));
  }, [progress]);

  const handleLessonSelect = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setProgress(prev => ({ ...prev, currentLessonId: lesson.id }));
    // On mobile, maybe scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = (id: string) => {
    if (!progress.completedLessons.includes(id)) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, id]
      }));
    }
    
    // Auto suggest next lesson
    const allLessons = COURSE_MODULES.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === id);
    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      setActiveLesson(next);
      setProgress(prev => ({ ...prev, currentLessonId: next.id }));
    }
  };

  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completionRate = Math.round((progress.completedLessons.length / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              财智启航 <span className="text-indigo-600 font-medium text-sm hidden sm:inline ml-2">职场新人系统投资课</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-slate-500 font-medium">学习进度</span>
              <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold border border-indigo-100">
              {completionRate}%
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Course List */}
          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            {COURSE_MODULES.map((module, idx) => (
              <div key={module.stage} className="space-y-3">
                <div className="flex items-center space-x-2 px-1">
                  <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {module.stage}
                  </h2>
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

            {/* Motivation Card */}
            <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-gem"></i>
              </div>
              <h3 className="font-bold text-slate-800">成就勋章待解锁</h3>
              <p className="text-sm text-slate-500 mt-2">完成所有课程，即可生成专属于你的“投资入场券”分析模型。</p>
            </div>
          </aside>

          {/* Main Content - Lesson Viewer */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            {activeLesson ? (
              <LessonViewer 
                lesson={activeLesson} 
                onComplete={handleComplete}
              />
            ) : (
              <div className="bg-white rounded-2xl h-96 flex flex-col items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
                <i className="fa-solid fa-book-open text-5xl mb-4 opacity-20"></i>
                <p>请在左侧选择一个课程开始学习</p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Mobile Bottom Nav Overlay (Mobile only progress tracker) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between sm:hidden z-40">
        <div className="flex-1 mr-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-bold text-slate-700">总进度</span>
            <span>{completionRate}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>
        <button className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
          <i className="fa-solid fa-list-ul"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
