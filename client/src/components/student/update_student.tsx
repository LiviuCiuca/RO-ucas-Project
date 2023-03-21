import axios from "axios";
import { useState } from "react";
import { Student } from "../../util/student";
import { Student_formFields } from "../formFields/Student_formField";



  const UpdateStudent = (props: { student: Student }) => {
    const [updatedStudent, setUpdatedStudent] = useState<Student>(props.student);
  

    const updateStudent = async (id: number) => {
        try {
        const response = await axios.put(`/api/student/${id}`, updatedStudent);
        console.log('Response data:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };

    const handleSubmit = (e: any) => {
        e.default();
        updateStudent(props.student.id);
        };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log("target:",e.target)
        setUpdatedStudent({ ...updatedStudent, [name]: value });
        
      };

    return (
        <div>
          <h1>Create Student</h1>
          <form>
                {Student_formFields.map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                value={updatedStudent[field.name]}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={updatedStudent[field.name]}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <button type="button" onClick={handleSubmit}>
                    Update
                </button>
            </form>
    </div>
  );
};

export default UpdateStudent;