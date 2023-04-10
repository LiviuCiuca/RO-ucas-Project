import axios from "axios";
import { Student } from "../../util/student";
import { useState } from "react";

const DeleteStudent = (props:{student:Student}) => {
    const {student} = props;
    //for feedback purposes
    const [deleteStatus, setDeleteStatus] = useState("");

    const deleteStudent = async (id: number) => {
        try {
            const response = await axios.delete(`/api/student/${id}`);
            setDeleteStatus("Delete successful.");
        } catch (error : any) {
            setDeleteStatus(`Delete failed: ${error.message}`);
        }
    };
    
    return (
        <div>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <p>{deleteStatus}</p>
        </div>
    );
};
export default DeleteStudent;
