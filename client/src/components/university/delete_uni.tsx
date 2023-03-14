import axios from "axios"

const DeleteUniversity = () => {
    const deleteUniversity = async (id: number) => {
        try {
        const response = await axios.delete(`/api/university/${id}`);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    
    //should import the university id from auth
    return (
        <div>
        <h1>Delete University</h1>
        <button onClick={() => deleteUniversity(1)}>Delete</button>
        </div>
    );
};