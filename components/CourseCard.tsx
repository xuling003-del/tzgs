
import React from 'react';
import { Lesson } from '../types';

interface CourseCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ lesson, isCompleted, isActive, onClick, index }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group ${
        isActive 
          ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md' 
          : isCompleted 
            ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100' 
            : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="relative shrink-0">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 ${
            isActive ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-500'
          }`}>
            <i className={`fa-solid ${lesson.icon}`}></i>
          </div>
          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shadow-sm transition-all duration-300 ${
            isActive 
              ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white' 
              : isCompleted 
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' 
                : 'bg-slate-300 text-slate-600 group-hover:bg-indigo-400 group-hover:text-white'
          }`}>
            {index + 1}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className={`font-bold text-base leading-snug transition-colors duration-300 ${
              isActive ? 'text-indigo-900' : isCompleted ? 'text-emerald-900' : 'text-slate-800 group-hover:text-indigo-700'
            }`}>
              {lesson.title}
            </h3>
            {isCompleted && (
              <span className="text-emerald-500 flex-shrink-0 ml-2 animate-pulse">
                <i className="fa-solid fa-circle-check text-lg"></i>
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed transition-colors duration-300 group-hover:text-slate-600">{lesson.description}</p>
          <div className="flex items-center mt-3 space-x-3 text-xs">
            <span className="flex items-center text-slate-400 transition-colors duration-300 group-hover:text-slate-500">
              <i className="fa-regular fa-clock mr-1.5"></i> {lesson.duration}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
              isActive 
                ? 'bg-indigo-100 text-indigo-700' 
                : isCompleted 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
            }`}>
              {isActive ? '学习中' : isCompleted ? '已完成' : '待解锁'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
