import axios from "axios"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { University } from "../../util/interface/university";

export const DeleteUniversity = (props: { university: University }) => {
    const { university } = props;
    const [deleteStatus, setDeleteStatus] = useState(false);

    const deleteUniversity = async (id: number) => {
        try {
            const response = await axios.delete(`/api/university/${id}`);
            setDeleteStatus(true);
            console.log(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="deleteUniversity">
            <Link to={`/university`}>
                <button type="button" name="delete" onClick={() => deleteUniversity(university.id)} disabled={deleteStatus} >
                    {deleteStatus ? "Deleted" : "Delete"}
                </button>
            </Link>
            <p>{deleteStatus}</p>
        </div>
    );
};