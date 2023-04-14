import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import UpdateCourse from "./update_course";
import { DeleteCourse } from "./delete_course";
import { Link, useParams, useNavigate  } from "react-router-dom";

export const CoursesById = () => {
  const [course, setCourse] = useState<Course[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
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
    console.log("Selected sda:", course);
    console.log("Selected Course:", selectedCourse);
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
      <p>price: {course.price}</p>
    </div>
  ));

  return (
    <div>
      <h1>My Courses</h1>
      {course.length > 0 ? (
        <h3>{displayCourse}</h3>
      ) : (
        <>
          {error && error !== "No courses found for this university." && <div>{error}</div>}
        </>
      )}
      {selectedCourse && <UpdateCourse selectedCourse={selectedCourse} />}
      {selectedCourse && <DeleteCourse selectedCourse={selectedCourse} />}
      <Link to={`/university/courses/${uniId}/create`}>
        <button>Create Course</button>
      </Link>
    </div>
  );
  

};
