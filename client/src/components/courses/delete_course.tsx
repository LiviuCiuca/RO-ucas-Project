import axios from "axios";
import { Course } from "../../util/course";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const DeleteCourse = (props: { selectedCourse: Course }) => {
    const { uniId } = useParams<{ uniId: string }>();
    const [deleteStatus, setDeleteStatus] = useState("");

    const deleteCourse = async (id: number) => {
        try {
            const response = await axios.delete(`/api/course/${id}`);
            setDeleteStatus("Delete successful.");
        } catch (error: any) {
            setDeleteStatus(`Delete failed: ${error.message}`);
        }
    };


    return (
        <div className="courseDelete">
            <h1>Delete Course</h1>
            <p>Are you sure you want to delete {props.selectedCourse.name}?</p>
            <button onClick={() => deleteCourse(props.selectedCourse.id)}>Delete</button>
            <p>{deleteStatus}</p>
            <Link to={`/university/courses/${uniId}`}>
                <button className='button'>Back</button>
            </Link>
        </div>

    );
};