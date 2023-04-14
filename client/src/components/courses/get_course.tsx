import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CoursesByIdProps } from "../../util/interface/courses_interface";

export const CoursesById: React.FC<CoursesByIdProps> = ({ setSelectedCourse }) => {
    const [course, setCourse] = useState<Course[]>([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { uniId } = useParams<{ uniId: string }>();

    const getCourses = async (id: number) => {
        try {
            const response = await axios.get(`/api/course/${id}`);
            console.log("Response:", response.data);
            setCourse(response.data);
            setLoading(false);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                navigate(`/university/courses/${uniId}/create`);
            } else {
                setError(error.message);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        getCourses(Number(uniId));
    }, []);

    const handleCourseSelect = (course: Course) => {
        setSelectedCourse(course);
        
    };

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if (error) {
        return <div>{error}</div>;
    }
    const displayCourse = course.map((course: Course) => (
        <div
            className="unisCourses"
            key={course.id}
            onClick={() => handleCourseSelect(course)}
        >
            <p>name: {course.name}</p>
            <p>description: {course.description}</p>
            <p>duration: {course.duration}</p>
            <p>price: {course.price}</p><br/>
        </div>
    ));

    return (
        <div>
            <h1>My Courses</h1>
            <h2>Please click to select a course:</h2><br/>

            <h3>{displayCourse}</h3>

            <Link to={`/university/courses/${uniId}/create`}>
                <button>Create Course</button>
            </Link>
            <Link to={`/university/courses/${uniId}/update`}>
                <button>Update</button>
            </Link>
            <Link to={`/university/courses/${uniId}/delete`}>
                <button>Delete</button>
            </Link>
            <Link to={`/university/${uniId}`}>
                <button>Back</button>
            </Link>

        </div>
    );


};
