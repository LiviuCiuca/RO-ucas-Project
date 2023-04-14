import axios from "axios";
import { useEffect, useState } from "react";
import { Enrollment } from "../../util/enrollment";
import UpdateEnrollment from "./update_enrollment";
import { Link, useParams } from "react-router-dom";

export const Enrollments = () => {
    const [enrollments, setEnrollment] = useState<Enrollment>({} as Enrollment);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { uniId } = useParams<{ uniId: string }>();

    //this should return all the students who enrolled to the uni  
    //uni sees this and will accpet or reject students
    const getEnrollment = async () => {
        try {
            const response = await axios.get(`/api/enrollment`);
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
            <UpdateEnrollment enrollment={enrollments} />
        </div>
    ));



    return (
        <div>
            <h1>Enrollment</h1>
            <div className="UniSide_Enrollments">
                {displayenrollment}
            </div>
           

            <div className="Example display">
                <p>Here we see all the applications the University has, currently not working due to a 400 error on server</p>
                <p>On each student theres buttons(line 43) that updates the enrollment(status) of the student, and a link to see the students profile </p>
                <br />
                <p>An example of it would be:</p><br/>
                <p>student: John Doe</p>
                <p>course: 1</p>
                <p>status: Applied</p><br />
                <button>Accept</button>
                <button>Reject</button><br />
            </div>
            <Link to={`/university/${uniId}`}>
                <button>Back</button>
            </Link>
        </div>
    );

}