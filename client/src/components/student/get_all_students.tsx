import axios from "axios";
import { useState, useEffect } from "react";
import { Student } from "../../util/student";
import { Link } from "react-router-dom";
//import "../../util/css/buttons.css";

export const Students = () => {
    const [students, setStudents] = useState<Student>({} as Student);
    const [selectedStudent, setSelectedStudent] = useState<Student>({} as Student);

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
    const handleStudentSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(e.target.value);
        const selectedStudent = students.find((student: { id: number; }) => student.id === selectedId) || null;
        setSelectedStudent(selectedStudent);
        console.log(selectedStudent);
    };

    return (
        <div>
            <h1>Students Login</h1>
            <label htmlFor="student-select">Select a student:</label>
            {/*  a dropdown to select a student */}
            <select
                value={selectedStudent ? selectedStudent.id : ""}
                onChange={handleStudentSelection}
                style={{ width: "200px", height: "30px", marginBottom: "10px" }}
            >
                <option value="">Select a student</option>
                {students.map((student: Student) => (
                    <option key={student.id} value={student.id}>
                        {student.name}
                    </option>
                ))}
            </select>
            {/*  a link to create a new student and to student profile */}
            <div className="create_student">
                <Link to="/create">
                    <button className="button">Create Student</button>
                </Link>
            </div>
            <div className="student_profile">
                <Link to={`/student/${selectedStudent.id}`}>
                    <button disabled={!selectedStudent}>Profile Student</button>
                </Link>
            </div>


        </div>

    );
};