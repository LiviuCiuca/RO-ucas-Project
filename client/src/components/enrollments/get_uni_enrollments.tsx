import axios from "axios";
import { useEffect, useState } from "react";
import { Enrollment } from "../../util/interface/enrollment";
import UpdateEnrollment from "./update_enrollment";
import { Link, useParams } from "react-router-dom";

export const Enrollments = () => {
    const [enrollment, setEnrollment] = useState<Enrollment>({} as Enrollment);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { courseId } = useParams<{ courseId: string }>();
    const { uniId } = useParams<{ uniId: string }>();// Accessing the uni from the URL parameter

    //this should return all the students who enrolled to the uni course  
    //uni sees this and will accpet or reject students
    const getEnrollment = async () => {
        try {
            const response = await axios.get(`/api/enrollment/course/${courseId}`);// Fetching the enrollments for the specific uni course
            console.log('Response:', response.data);
            setEnrollment(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getEnrollment();
    }, []);

    //to rerender the component when i click update button
    const handleEnrollmentUpdate = () => {
        getEnrollment();
    };

    if (loading) {
        return <div>
            <h1>Loading...</h1>
        </div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    //display each course sepparately with the buttons imported from enrollments component
    const displayenrollment = enrollment.map((enroll: Enrollment) => (
        <div className="enrollments"
            key={enroll.id}>
            <p>Student name: {enroll.student.name}</p>
            <p>Course Name: {enroll.course.name}</p>
            <p>Status: {enroll.status}</p>
            <UpdateEnrollment enrollment={enroll} onEnrollmentUpdate={handleEnrollmentUpdate} />
        </div>
    ));


    //display results
    return (
        <div>
            <h1>Enrollment</h1>
            <div className="UniSide_Enrollments">
                {displayenrollment}
            </div>
            <Link to={`/university/courses/${uniId}`}>
                <button type="button">Back</button>
            </Link>
        </div>
    );

}