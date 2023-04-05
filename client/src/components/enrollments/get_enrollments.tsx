import axios from "axios";
import { useState, useEffect } from "react";
import { Enrollment } from "../../util/enrollment";
import { Student } from "../../util/student";

//shows all enrollments of a student
export const Enrollmen = (props: {student: Student}) => {
    const [enrollments, setEnrollments] = useState<Enrollment>({} as Enrollment);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getEnrollment = async (id : number) => {
        try {
            const response = await axios.get(`/api/enrollment/${id}`);
            console.log("Response data:", response.data);
            setEnrollments(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        
        getEnrollment(15);
    }, []);

    if (loading) {
        return <div><h1>Loading...</h1></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Enrollments</h1>
            <h3>{enrollments.map((enrollment:Enrollment) => (
                <div key={enrollment.id}>
                    enrollment.course.name:{enrollment.course.name}
                    enrollment.status:{enrollment.status}
                </div>
            ))}</h3>
        </div>
    );
};