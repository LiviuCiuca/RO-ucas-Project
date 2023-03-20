import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import { CreateCourse } from "./create_course";

export const Courses = () => {
    const [courses,setCourses] = useState<Course[]>([]);
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
    function displayCourses() {
        return courses.map((course) => {
            return (
                <div>
                    <h3>Course name: {course.name}</h3>
                    <p>Description: {course.description}</p>
                    <p>Price: {course.price} £/year</p>
                    <p>Duration: {course.duration} months</p>
                    <br/>
                    {/* here i can add delete , maybe update too ? */}
                </div>
            );
        });
    }



    return (
        <div>
            <h1>Courses</h1>
            <div>{displayCourses()}</div>
                  <CreateCourse/>
        </div>
    );

}