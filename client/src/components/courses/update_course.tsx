import axios from "axios";

const updateCourse = async (id:number) => {
    try {
        const response = await axios.put(`/api/course/${id}`);
        console.log('Response:', response.data);
    } catch (error : any) {
        console.log(error.message);
    }
    
    return (
        <div>
        <h1>Update Course</h1>
        <button onClick={() => updateCourse(1)}>Update</button>
        </div>
    );
};