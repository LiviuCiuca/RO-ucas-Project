import { Route, Routes } from "react-router-dom";
import { CoursesById } from "../courses/get_course";
import { CreateCourse } from "../courses/create_course";
import UpdateCourse from "../courses/update_course";

   
export const Parent_CourseComponent = () => {
     // this uniId comes from the university url path
    return (
        <>
        <Routes>
        <Route 
        path="/" 
        element={<CoursesById />} 
        />
        <Route
        path="/create"
        element={<CreateCourse />}
        />
        {/* <Route
        path="/update/:courseId"
        element={<UpdateCourse />}
        /> */}

        </Routes>


        </>
    );
    };