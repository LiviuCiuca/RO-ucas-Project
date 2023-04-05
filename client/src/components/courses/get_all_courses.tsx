import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import { Student } from "../../util/student";
import { CreateEnrollment } from "../enrollments/post_enrollment";
import { CreateCourse } from "./create_course";
import { CoursesById } from "./get_course";

export const Courses = (props: {student : Student}) => {
    const [courses,setCourses] = useState<Course>({} as Course);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
     // for student applyong for a course
     const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);

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

     
    const handleCourseSelect = (course: Course) => {
        setSelectedCourse(course);
      };

    //function to display courses on page
    const displayCourses = courses.map((course: Course) => (
        <div className="CoursesByUni"
            key={course.id}
            onClick={() => handleCourseSelect(course)}>
                <p>name: {course.name}</p>
                <p>description: {course.description}</p>
                <p>duration: {course.duration}</p>
                <p>price: {course.price}</p>
                <CreateEnrollment student={props.student} course={selectedCourse} />
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