import axios from "axios";
import { useEffect, useState } from "react";
import { Enrollment } from "../../util/enrollment";
import UpdateEnrollment from "./update_enrollment";

export const Enrollments = () => {
    const [enrollments,setEnrollment] = useState<Enrollment>({} as Enrollment);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //this should return all the students who enrolled to the uni  
     //uni sees this and will accpet or reject students
    const getEnrollment = async () => {
        try {
            const response = await axios.get(`/api/enrollment`);
            console.log('Response:', response.data);
            setEnrollment(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getEnrollment();
    }, []);
    
    if (loading) {
        return <div>
          <h1>Loading...</h1>
          </div>;
    }  
    if (error) {
        return <div>{error}</div>;
    }

    const displayenrollment = enrollments.map((enroll: Enrollment) => (
        <div className="enrollments"
            key={enroll.id}>
                <p>student: {enroll.student.name}</p>
                <p>course: {enroll.course.id}</p>
                <p>status: {enroll.status}</p>
        </div>
    ));
    


    return (
        <div>
            <h1>Enrollment</h1>
            <UpdateEnrollment enrollment={enrollments}/>
        </div>
    );

}