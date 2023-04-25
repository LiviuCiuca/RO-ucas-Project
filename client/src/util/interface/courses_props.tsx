import { Course } from "./course";

export interface CoursesByIdProps {
    setSelectedCourse: (course: Course) => void;
    SelectedCourse: Course;
    
  }