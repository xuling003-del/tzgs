import React, { useState, useEffect } from 'react';
import { courseManager } from '../services/CourseManager';

interface CourseListProps {
  category?: string;
  difficulty?: string;
}

const CourseList: React.FC<CourseListProps> = ({ category, difficulty }) => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, [category, difficulty]);

  const loadCourses = () => {
    let filteredCourses = courseManager.getCourses();
    
    if (category) {
      filteredCourses = filteredCourses.filter(course => course.category === category);
    }
    
    if (difficulty) {
      filteredCourses = filteredCourses.filter(course => course.difficulty === difficulty);
    }
    
    setCourses(filteredCourses);
    setLoading(false);
  };

  if (loading) {
    return <div>加载课程中...</div>;
  }

  return (
    <div className="course-list">
      <h2>课程列表</h2>
      {courses.length === 0 ? (
        <p>没有找到相关课程</p>
      ) : (
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span className="category">{course.category}</span>
                <span className="difficulty">{course.difficulty}</span>
                <span className="duration">{course.duration} 分钟</span>
              </div>
              <div className="modules-count">
                {course.modules.length} 个模块
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;