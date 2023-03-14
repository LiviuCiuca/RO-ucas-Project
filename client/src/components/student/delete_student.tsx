import axios from "axios";

const DeleteStudent = () => {
    const deleteStudent = async (id: number) => {
        try {
        const response = await axios.delete(`/api/student/${16}`);
        console.log('Deleted');
        } catch (error : any) {
        console.log(error.message);
        }
    };
    
    //should import the student id from auth
    return (
        <div>
        <h1>Delete Student</h1>
        <button onClick={() => deleteStudent(1)}>Delete</button>
        </div>
    );
};
export default DeleteStudent;