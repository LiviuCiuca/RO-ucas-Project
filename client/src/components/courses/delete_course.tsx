import axios from "axios";

const DeleteCourse = () => {
    const deleteCourse = async (id: number) => {
        try {
        const response = await axios.delete(`/api/course/${id}`);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    
    //should import the course id from auth
    return (
        <div>
        <h1>Delete Course</h1>
        <button onClick={() => deleteCourse(1)}>Delete</button>
        </div>
    );
};