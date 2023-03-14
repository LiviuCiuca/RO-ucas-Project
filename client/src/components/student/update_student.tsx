import axios from "axios";
import { useState } from "react";
import { Student } from "../../util/student";

  const UpdateStudent = (props: { student: Student }) => {
    console.log("student:",props.student);
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
        e.preventDefault();
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
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={updatedStudent.name} onChange={handleChange} />
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={updatedStudent.username} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={updatedStudent.password} onChange={handleChange} />
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" value={updatedStudent.age} onChange={handleChange} />
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={updatedStudent.address} onChange={handleChange} />
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" value={updatedStudent.phone} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={updatedStudent.email} onChange={handleChange} />
            <label htmlFor="contactDetails">Contact Details:</label>
            <input type="text" name="contactDetails" value={updatedStudent.contactDetails} onChange={handleChange} />
            <label htmlFor="personalStatement">Personal Statement:</label>
            <textarea name="personalStatement" value={updatedStudent.personalStatement} onChange={handleChange} />
            <label htmlFor="whyTheCourse">Why The Course:</label>
            <textarea name="whyTheCourse" value={updatedStudent.whyTheCourse} onChange={handleChange} />
            <label htmlFor="education">Education:</label>
            <textarea name="education" value={updatedStudent.education} onChange={handleChange} />
            <label htmlFor="workExperience">Work Experience:</label>
            <textarea name="workExperience" value={updatedStudent.workExperience} onChange={handleChange} />
            <label htmlFor="skills">Skills:</label>
            <textarea name="skills" value={updatedStudent.skills} onChange={handleChange} />
            <label htmlFor="interests">Interests:</label>
            <textarea name="interests" value={updatedStudent.interests} onChange={handleChange} />
            <label htmlFor="references">References:</label>
            <textarea name="references" value={updatedStudent.references} onChange={handleChange} />
        </form>
        <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default UpdateStudent;