import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Course } from "../../util/interface/course";
import { CreateCourse } from "../courses/create_course";
import { CoursesById } from "../courses/get_course";
import UpdateCourse from "../courses/update_course";
import { DeleteCourse } from "../courses/delete_course";
import { Enrollments } from "../enrollments/get_uni_enrollments";

export const Parent_CourseComponent = () => {
    const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);
    

    // this uniId comes from the university url path
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<CoursesById setSelectedCourse={setSelectedCourse} SelectedCourse={selectedCourse} />} />
                <Route
                    path="/create"
                    element={<CreateCourse />} />
                <Route
                    path="/update"
                    element={<UpdateCourse selectedCourse={selectedCourse} />}
                />
                <Route
                    path="/delete"
                    element={<DeleteCourse selectedCourse={selectedCourse} />}
                />
                 <Route
                    path="/enrollments/:courseId"
                    element={<Enrollments />}
                />
            </Routes>
        </>
    );
};
