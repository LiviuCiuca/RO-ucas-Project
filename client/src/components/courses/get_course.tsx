import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/interface/course";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CoursesByIdProps } from "../../util/interface/courses_props";
import { DeleteCourse } from "./delete_course";

export const CoursesById: React.FC<CoursesByIdProps> = ({ SelectedCourse,setSelectedCourse }) => {
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
            <p>Course name: {course.name}</p>
            <p>Description: {course.description}</p>
            <p>Duration: {course.duration} Months</p>
            <p>Total price: {course.price} RON</p><br />

        </div>
    ));

    return (
        <div>
            <h1>My Courses</h1>
            <h2>Please click to select a course:</h2><br />

            <div>{displayCourse}</div>

            <DeleteCourse selectedCourse={SelectedCourse} />

            <Link to={`/university/courses/${uniId}/create`}>
                <button>Create Course</button>
            </Link>
            <Link to={`/university/courses/${uniId}/update`}>
                <button>Update</button>
            </Link>

            <Link to={`/university/${uniId}`}>
                <button>Back</button>
            </Link>
            <Link to={`/university/courses/${uniId}/enrollments/${SelectedCourse.id}`}>
                <button className='button'>My Students</button>
            </Link>

        </div>
    );


};
