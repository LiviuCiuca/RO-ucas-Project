import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";

const Courses = () => {
    const [courses,setCourses] = useState<Course[]>([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //gotta check if the endpoint is correct
    // this is visible for all students , when they select one should give me course id and displays all info of that course where he can apply 
     
    const getCourses = async (id:number) => {
        try {
            const response = await axios.get(`/api/courses`);
            console.log('Response:', response.data);
            setCourses(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        const id = 1; 
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

    return (
        <div>
            <h1>Courses</h1>
        </div>
    );

}