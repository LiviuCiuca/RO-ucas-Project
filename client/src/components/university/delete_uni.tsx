import axios from "axios"
import { University } from "../../util/university";

export const DeleteUniversity = (props: {university :University}) => {
    const {university} = props;
    const deleteUniversity = async (id: number) => {
        try {
        const response = await axios.delete(`/api/university/${id}`);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    console.log(university.id);
    
    //should import the university id from auth
    return (
        <div>
        <h1>Delete University</h1>
        <button onClick={() => deleteUniversity(university.id)}>Delete</button>
        </div>
    );
};