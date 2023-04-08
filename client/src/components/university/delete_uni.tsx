import axios from "axios"
import { University } from "../../util/university";
import { useState } from "react";

export const DeleteUniversity = (props: {university :University}) => {

    const {university} = props;
    const [deleteStatus, setDeleteStatus] = useState("");
    
    const deleteUniversity = async (id: number) => {
        try {
        const response = await axios.delete(`/api/university/${id}`);
            setDeleteStatus("Delete successful.");
        } catch (error : any) {
            setDeleteStatus(`Delete failed: ${error.message}`);
        }
    };
    
    
    return (
        <div className="deleteUniversity">
        <button onClick={() => deleteUniversity(university.id)}>Delete</button>
        <p>{deleteStatus}</p>
        </div>
    );
};