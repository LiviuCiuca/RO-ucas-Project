import axios from "axios";
import { Student } from "../../util/interface/student";
import { Link } from "react-router-dom";

// The component receives a student object as a prop from get_student.tsx
const DeleteStudent = (props:{student:Student}) => {
    const {student} = props;

    // function sends a DELETE request to the API with the student's ID
    const deleteStudent = async (id: number) => {
        try {
            const response = await axios.delete(`/api/student/${id}`);
            console.log('Response data:', response.data);
        } catch (error : any) {
            console.log(error.message);
        }
    };
    
    return (
        <div>
            {/* When the Delete button is clicked, it calls the deleteStudent function with the student's ID and then navigates to the /allstudent page */}
            <Link to={`/allstudent`}>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </Link>
        </div>
    );
};

export default DeleteStudent;

// noticed a bug , after clicking delete button , the page needs refresh to show the updated list of students
