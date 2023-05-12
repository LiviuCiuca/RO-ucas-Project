import axios from "axios";
import { useState } from "react";
import { Student } from "../../util/interface/student";
import { Student_formFields } from "../../util/formFields/Student_formField";
import { Link } from "react-router-dom";
import "../../util/css/all_style.css";
import "../../util/css/form.css"

const CreateStudent = () => {
  const [student, setStudent] = useState<Omit<Student, "id">>({
    // Initialize student state with empty values
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

  const [submitted, setSubmitted] = useState(false);

  const createStudent = async () => {
    try {
      // Send a POST request to create a new student
      const response = await axios.post("/api/student", student);
      console.log("Response data:", response.data);
      setSubmitted(true); // Set submitted state to true after successful creation
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createStudent();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value }); // Update the student state with the changed input value
  };

  return (
    <div>
      <h1>Create Student</h1>
      <form>
        {/* Render input fields for each property in the student object */}
        {Student_formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={student[field.name]}
                onChange={handleChange}
                required // Added required attribute to make the field mandatory
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={student[field.name]}
                onChange={handleChange}
                required // Added required attribute to make the field mandatory
              />
            )}
          </div>
        ))}
        <button type="submit" onClick={handleSubmit} disabled={submitted}>
          {submitted ? "Created" : "Create"}
        </button>
      </form>
      <Link to={`/allstudent`}>
        <button type="button">Back</button>
      </Link>
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