import axios from "axios";
import { Student } from "../../util/student";

const DeleteStudent = (props:{student:Student}) => {
    const {student} = props;
    const deleteStudent = async (id: number) => {
        try {
        const response = await axios.delete(`/api/student/${id}`);
        console.log('Deleted');
        } catch (error : any) {
        console.log(error.message);
        }
    };
    
    //should import the student id from auth
    return (
        <div>
        <h1>Delete Student</h1>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </div>
    );
};
export default DeleteStudent;