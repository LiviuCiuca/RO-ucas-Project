import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";

export const CoursesById = () => {
    const [course,setCourse] = useState<Course>({} as Course);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //gotta check if the endpoint is correct
    // import id from a list 
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
        const id = 8; 
        getCourses(id);
    }, []);
    
    if (loading) {
        return <div>
          <h1>Loading...</h1>
          </div>;
    }  
    if (error) {
        return <div>{error}</div>;
    }
    const displayCourse = course.map((course: any) => (
        <div key={course.id}>
            {course.name}
            {course.description}
            {course.duration}
            {course.price}
            </div>
    ));


    return (
        <div>
            <h1>Course</h1>
            <h3>{displayCourse}</h3>
            
        </div>
    );

    //gotta do conditional rendering ? if im logged in as student i need apply button and hide delete and update button,
    //if im logged in as uni then i gotta delete button and update button 
    // or i do a similar component with a button to apply for the course
    // or if it works, keep this component for displaying and an apply button that takes this id and student id 
    // my brain is fried
}