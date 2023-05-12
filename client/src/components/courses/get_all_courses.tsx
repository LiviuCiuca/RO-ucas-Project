import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/interface/course";
import { Student } from "../../util/interface/student";
import { CreateEnrollment } from "../enrollments/post_enrollment";
import { Link, useParams } from "react-router-dom";
import "../../util/css/info_display.css"

export const Courses = (props: { student: Student }) => {
    const [courses, setCourses] = useState<Course>({} as Course);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // for student applyong for a course
    const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);

    const { studentId } = useParams<{ studentId: string }>();

    // this is visible for all students , when they select one should give me course id and displays all info of that course where he can apply 

    const getCourses = async () => {
        try {
            const response = await axios.get(`/api/course`);
            console.log('Response:', response.data);
            setCourses(response.data);
            setLoading(false);
        } catch (error: any) {
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
        <div className="allCourses"
            key={course.id}
            onClick={() => handleCourseSelect(course)}>
            <p>Course name: {course.name}</p>
            <p>Description: {course.description}</p>
            <p>Duration: {course.duration} Months</p>
            <p>Price: {course.price} RON</p>
            <CreateEnrollment student={props.student} course={selectedCourse} />
        </div>
    ));


    return (
        <div>
            <h1>Courses</h1>
            <div>{displayCourses}</div>
            <Link to={`/student/${studentId}`}>
                <button className="back">Back</button>
            </Link>
        </div>
    );

}