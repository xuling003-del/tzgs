
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
      className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
        isActive 
          ? 'border-indigo-500 bg-indigo-50' 
          : isCompleted 
            ? 'border-green-200 bg-white' 
            : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="relative shrink-0">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${
            isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'
          }`}>
            <i className={`fa-solid ${lesson.icon}`}></i>
          </div>
          <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
            isActive 
              ? 'bg-indigo-600 text-white' 
              : isCompleted 
                ? 'bg-green-500 text-white' 
                : 'bg-slate-300 text-slate-600'
          }`}>
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`font-bold ${isActive ? 'text-indigo-900' : 'text-slate-800'}`}>
              {lesson.title}
            </h3>
            {isCompleted && (
              <span className="text-green-500">
                <i className="fa-solid fa-circle-check"></i>
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500 mt-1 line-clamp-1">{lesson.description}</p>
          <div className="flex items-center mt-2 space-x-3 text-xs text-slate-400">
            <span className="flex items-center">
              <i className="fa-regular fa-clock mr-1"></i> {lesson.duration}
            </span>
            <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
              {isActive ? '学习中' : isCompleted ? '已完成' : '待解锁'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
