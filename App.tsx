
import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './constants';
import { UserProgress, Lesson } from './types';
import CourseCard from './components/CourseCard';
import LessonViewer from './components/LessonViewer';
import RippleButton from './components/RippleButton';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('user_investment_progress');
    return saved ? JSON.parse(saved) : { completedLessons: [], currentLessonId: 'f1' };
  });

  const [isMobile, setIsMobile] = useState(false);

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(() => {
    const id = progress.currentLessonId || 'f1';
    for (const mod of COURSE_MODULES) {
      const found = mod.lessons.find(l => l.id === id);
      if (found) return found;
    }
    return COURSE_MODULES[0].lessons[0];
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem('user_investment_progress', JSON.stringify(progress));
  }, [progress]);

  const handleLessonSelect = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setProgress(prev => ({ ...prev, currentLessonId: lesson.id }));
    
    if (isMobile) {
      setTimeout(() => {
        const element = document.getElementById(`lesson-${lesson.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleContinueLearning = () => {
    const currentLesson = COURSE_MODULES.flatMap(m => m.lessons).find(l => l.id === progress.currentLessonId);
    if (currentLesson) {
      setActiveLesson(currentLesson);
      const element = document.getElementById(`lesson-${currentLesson.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleComplete = (id: string, autoNext: boolean = true) => {
    if (!progress.completedLessons.includes(id)) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, id]
      }));
    }
    
    if (autoNext) {
      const allLessons = COURSE_MODULES.flatMap(m => m.lessons);
      const currentIndex = allLessons.findIndex(l => l.id === id);
      if (currentIndex < allLessons.length - 1) {
        const next = allLessons[currentIndex + 1];
        setActiveLesson(next);
        setProgress(prev => ({ ...prev, currentLessonId: next.id }));
      }
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
          <div className="flex items-center space-x-3">
            <RippleButton
              onClick={handleContinueLearning}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-4 py-2 rounded-lg transition-all active:scale-95 shadow-md hover:shadow-lg"
            >
              <i className="fa-solid fa-play text-xs"></i>
              <span className="text-sm font-bold">继续学习</span>
            </RippleButton>
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

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar - Course List */}
          <aside className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            {COURSE_MODULES.map((module, idx) => (
              <div key={module.stage} className={`space-y-4 animate-slideUp stagger-${idx + 1}`}>
                <div className="flex items-center space-x-3 px-1">
                  <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform">
                    {idx + 1}
                  </span>
                  <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {module.stage}
                  </h2>
                </div>
                <div className="space-y-4">
                  {module.lessons.map((lesson, lessonIdx) => (
                    <div key={lesson.id} id={`lesson-${lesson.id}`} className={`animate-scaleIn stagger-${(lessonIdx % 5) + 1}`}>
                      <CourseCard 
                        lesson={lesson}
                        isCompleted={progress.completedLessons.includes(lesson.id)}
                        isActive={activeLesson?.id === lesson.id}
                        onClick={() => handleLessonSelect(lesson)}
                        index={lessonIdx}
                      />
                      {isMobile && activeLesson?.id === lesson.id && (
                        <div className="mt-5 animate-fadeIn">
                          <LessonViewer 
                            lesson={activeLesson} 
                            onComplete={(id) => handleComplete(id, false)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Motivation Card */}
            <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center text-center animate-bounce hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md hover:scale-110 transition-transform">
                <i className="fa-solid fa-gem"></i>
              </div>
              <h3 className="font-bold text-slate-800">成就勋章待解锁</h3>
              <p className="text-sm text-slate-500 mt-2">完成所有课程，即可生成专属于你的"投资入场券"分析模型。</p>
            </div>
          </aside>

          {/* Main Content - Lesson Viewer (Desktop only) */}
          {!isMobile && (
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
          )}
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
        <button 
          onClick={handleContinueLearning}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg transition-all active:scale-95"
        >
          <i className="fa-solid fa-play text-xs"></i>
          <span className="text-sm font-bold">继续学习</span>
        </button>
      </div>
    </div>
  );
};

export default App;
