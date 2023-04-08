import axios from "axios";
import { useState, useEffect } from "react";
import { Student } from "../../util/student";
import CreateStudent from "./create_student";

export const Students = () => {
    const [students, setStudents] = useState<Student>({} as Student);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    
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
    const handleStudentSelection = (e: React.ChangeEvent<HTMLSelectElement>) => { // <-- add function to handle student selection
        const selectedId = parseInt(e.target.value);
        const selectedStudent = students.find((student: { id: number; }) => student.id === selectedId) || null;
        setSelectedStudent(selectedStudent);
    };

    return (
        <div>
            {/* Add a dropdown to select a student */}
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
            {/* this will show up when a create button shows up  */}
            <CreateStudent />

        </div>

    );
};