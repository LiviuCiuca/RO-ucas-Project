import axios from "axios";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Course } from "../../util/course";
import { CreateCourse } from "./create_course";
import { CoursesById } from "./get_course";

export const Courses = () => {
    const [courses,setCourses] = useState<Course>({} as Course);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

   
    // this is visible for all students , when they select one should give me course id and displays all info of that course where he can apply 
     
    const getCourses = async () => {
        try {
            const response = await axios.get(`/api/course`);
            console.log('Response:', response.data);
            setCourses(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getCourses();
    }, []);
    
    if (loading) {
        return <div>
          <h1>Loading...</h1>
          </div>;
    }  
    if (error) {
        return <div>{error}</div>;
    }

    //function to display courses on page
    const displayCourses = courses.map((course: Course) => (
        <div className="CoursesByUni"
            key={course.id}>
                <p>name: {course.name}</p>
                <p>description: {course.description}</p>
                <p>duration: {course.duration}</p>
                <p>price: {course.price}</p>
        </div>
    ));


    return (
        <div>
            <h1>Courses</h1>
            <div>{displayCourses}</div>
                <CreateCourse/>
                <CoursesById/>
        </div>
    );

}