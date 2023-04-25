import { Course } from "../interface/course";

export type DeleteCourseProps = {
    course: Course;
    onCourseDelete: () => void;
};