import axios from "axios";

const UpdateStudent = () => {
    const updateStudent = async (id: number) => {
        try {
        const response = await axios.put(`/api/student/${id}`);
        console.log('Response data:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    
    return (
        <div>
        <h1>Update Student</h1>
        <button onClick={() => updateStudent(1)}>Update</button>
        </div>
    );
};
export default UpdateStudent;