import axios from "axios";
import { useState } from "react";
import { Student } from "../../util/student";

const CreateStudent = () => {
    const [student, setStudent] = useState<Student>({
        name: "",
        username: "",
        password: "",
        age: 0,
        address: "",
        phone: "",
        email: "",
        contactDetails: "",
        personalStatement: "",
        whyTheCourse: "",
        education: "",
        workExperience: "",
        skills: "",
        interests: "",
        references: "",
      });

      
    const createStudent = async () => {
        try {
          const response = await axios.post("/api/student",  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)});
            
          console.log("Response data:", response.data);
        } catch (error: any) {
          console.log(error.message);
        }
    };

    const handleChange = (e :any ) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };
    
    
    return (
        <div>
          <h1>Create Student</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={student.name} onChange={handleChange} />
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={student.username} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={student.password} onChange={handleChange} />
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" value={student.age} onChange={handleChange} />
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={student.address} onChange={handleChange} />
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" value={student.phone} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={student.email} onChange={handleChange} />
            <label htmlFor="contactDetails">Contact Details:</label>
            <input type="text" name="contactDetails" value={student.contactDetails} onChange={handleChange} />
            <label htmlFor="personalStatement">Personal Statement:</label>
            <textarea name="personalStatement" value={student.personalStatement} onChange={handleChange} />
            <label htmlFor="whyTheCourse">Why The Course:</label>
            <textarea name="whyTheCourse" value={student.whyTheCourse} onChange={handleChange} />
            <label htmlFor="education">Education:</label>
            <textarea name="education" value={student.education} onChange={handleChange} />
            <label htmlFor="workExperience">Work Experience:</label>
            <textarea name="workExperience" value={student.workExperience} onChange={handleChange} />
            <label htmlFor="skills">Skills:</label>
            <textarea name="skills" value={student.skills} onChange={handleChange} />
            <label htmlFor="interests">Interests:</label>
            <textarea name="interests" value={student.interests} onChange={handleChange} />
            <label htmlFor="references">References:</label>
            <textarea name="references" value={student.references} onChange={handleChange} />
        </form>
        <button onClick={createStudent}>Create</button>
    </div>
  );
};
export default CreateStudent;
// //https://www.youtube.com/watch?v=IkMND33x0qQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=27&ab_channel=TheNetNinja

// In the above code, we have added a handleChange function which is triggered whenever any input field changes.
// It updates the corresponding property in the student object using setStudent function.
// Then, we have added a form with input fields for all the properties of the Student interface.
// We have set the value of each input field to the corresponding property of the student object and the onChange event to the handleChange function
// Finally, we have added a button that triggers the createStudent function when clicked. 
//This function sends a POST request to the server with the student object as the payload.
// The response data is logged to the console on success and any error message is logged on failure.