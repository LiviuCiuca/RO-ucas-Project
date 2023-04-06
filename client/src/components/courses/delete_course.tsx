import axios from "axios";
import { Course } from "../../util/course";

export const DeleteCourse = (props: { selectedCourse: Course }) => {

    const deleteCourse = async (id: number) => {
        try {
        const response = await axios.delete(`/api/course/${id}`);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    

    return (
        <div>
        <h1>Delete Course</h1>

        <button onClick={() => deleteCourse(props.selectedCourse.id)}>Delete</button>
        <h3>Delete succesfull</h3>
        </div>
    );
};