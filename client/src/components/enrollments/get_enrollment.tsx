import axios from "axios";
import { useEffect, useState } from "react";
import { Enrollment } from "../../util/enrollment";

export const Enrollments = () => {
    const [enrollment,setEnrollment] = useState<Enrollment[]>([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //this should return all enrillments of a student
     
    const getEnrollment = async (id:number) => {
        try {
            const response = await axios.get(`/api/enrollment/${id}`);
            console.log('Response:', response.data);
            setEnrollment(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        const studentId = 15; 
        getEnrollment(studentId);
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
            <h1>Enrollment</h1>
            
        </div>
    );

}