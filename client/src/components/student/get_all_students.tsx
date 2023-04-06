import axios from "axios";
import { useState, useEffect } from "react";
import { Student } from "../../util/student";
import CreateStudent from "./create_student";

export const Students = () => {
    const [students, setStudents] = useState<Student>({} as Student);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllStudents = async () => {
        try {
            const response = await axios.get("/api/student");
            console.log("Response data:", response.data);
            setStudents(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllStudents();
    }, []);

    if (loading) {
        return <div><h1>Loading...</h1></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Students</h1>
            <h3>{students.map((student:Student) => (
                <div key={student.id}>
                    Name: {student.name}
                </div>
            ))}</h3>
            {/* this will show up when a create button shows up  */}
            <CreateStudent/>

        </div>
        
    );
};