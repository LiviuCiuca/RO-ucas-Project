import axios from "axios";
import { Course } from "../../util/course";
import { useState } from "react";

export const DeleteCourse = (props: { selectedCourse: Course }) => {

    const [deleteStatus, setDeleteStatus] = useState("");
    
    const deleteCourse = async (id: number) => {
        try {
        const response = await axios.delete(`/api/course/${id}`);
            setDeleteStatus("Delete successful.");
        } catch (error : any) {
            setDeleteStatus(`Delete failed: ${error.message}`);
        }
    };
    

    return (
        <div className="courseDelete">
        <button onClick={() => deleteCourse(props.selectedCourse.id)}>Delete</button>
        <p>{deleteStatus}</p>
        </div>
    );
};