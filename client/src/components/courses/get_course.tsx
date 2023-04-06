import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import UpdateCourse from "./update_course";
import { DeleteCourse } from "./delete_course";
import { CreateCourse } from "./create_course";

export const CoursesById = () => {
    const [course,setCourse] = useState<Course>({} as Course);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);

    const getCourses = async (id:number) => {
        try {
            const response = await axios.get(`/api/course/${id}`);
            console.log('Response:', response.data);
            setCourse(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        const uniId = 8; 
        getCourses(uniId);
    }, []);
    
    const handleCourseSelect = (course: Course) => {
        setSelectedCourse(course);
        console.log('Selected sda:', course);
        console.log('Selected Course:', selectedCourse);
    }

    if (loading) {
        return <div>
          <h1>Loading...</h1>
          </div>;
    }  
    if (error) {
        return <div>{error}</div>;
    }
    const displayCourse = course.map((course: Course) => (
        <div className="CoursesByUni"
            key={course.id}
            onClick={() => handleCourseSelect(course)}>
                <p>name: {course.name}</p>
                <p>description: {course.description}</p>
                <p>duration: {course.duration}</p>
                <p>price: {course.price}</p>
        </div>
    ));

    return (
        <div>
            <h1>My Courses</h1>
            <h3>{displayCourse}</h3>
            {/* 'UpdateCourse' should be rendered conditionally only when a course is selected */}
            {/* error */}
            {selectedCourse && <UpdateCourse selectedCourse={selectedCourse} />}
            {selectedCourse && <DeleteCourse selectedCourse={selectedCourse} />}
            <CreateCourse/>
        </div>
    );
}
