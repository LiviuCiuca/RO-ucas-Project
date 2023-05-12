import axios from "axios";
import { Course } from "../../util/interface/course";
import { useState } from "react";

export const DeleteCourse = (props: { selectedCourse: Course }) => {
    const [deleteStatus, setDeleteStatus] = useState("");

    const deleteCourse = async (id: number) => {
        try {
            const response = await axios.delete(`/api/course/${id}`);
            setDeleteStatus("Delete successful.");
           
        } catch (error: any) {
            setDeleteStatus(`Delete failed: ${error.message}`);
            console.log("course:", props.selectedCourse);
        }
    };


    return (
        <div className="courseDelete">
           
            <p>Are you sure you want to delete {props.selectedCourse.name}?</p>
            <button type="button" disabled={!props.selectedCourse} onClick={() => deleteCourse(props.selectedCourse.id)}>Delete</button>
            <p>{deleteStatus}</p>
        
        </div>

    );
};