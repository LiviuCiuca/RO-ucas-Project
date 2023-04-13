import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom";

export const DeleteUniversity = () => {
    const { uniId } = useParams<{ uniId: string }>(); 
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

        <button onClick={() => deleteUniversity(Number(uniId))}>Delete</button>
        <p>{deleteStatus}</p>
        </div>
    );
};