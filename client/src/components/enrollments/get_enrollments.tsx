import axios from "axios";
import { useState, useEffect } from "react";
import { Enrollment } from "../../util/interface/enrollment";
import { Link, useParams } from "react-router-dom";

//shows all enrollments of a student
export const Enrollmen = () => {
    const [enrollments, setEnrollments] = useState<Enrollment>({} as Enrollment);
    const { studentId } = useParams<{ studentId: string }>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getEnrollment = async (id: number) => {
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
            <h1>My Applications</h1>
            <div className="enrollment">{enrollments.map((enrollment: Enrollment) => (
                <div className="enrollment2"key={enrollment.id}>
                    <p>Course name: {enrollment.course.name}</p>
                    <p>Application status: {enrollment.status}</p>
                    <br />
                </div>
            ))}
            </div>
            <Link to={`/student/${studentId}`}>
                <button type="button">Back</button>
            </Link>
        </div>
    );
};