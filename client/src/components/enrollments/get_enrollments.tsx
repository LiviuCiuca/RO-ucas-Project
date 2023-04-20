import axios from "axios";
import { useState, useEffect } from "react";
import { Enrollment } from "../../util/enrollment";
import { Link, useParams } from "react-router-dom";

//shows all enrollments of a student
export const Enrollmen = () => {
    const [enrollments, setEnrollments] = useState<Enrollment>({} as Enrollment);
    const { studentId } = useParams<{ studentId: string }>();

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
        getEnrollment(Number(studentId));
    }, [studentId]);

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
                    <p>Course name: {enrollment.course.name}</p>
                    <p>status: {enrollment.status}</p>
                    <br/>
                </div>
            ))}</h3>
             <Link to={`/student/${studentId}`}>
                <button>Back</button>
            </Link>
        </div>
    );
};