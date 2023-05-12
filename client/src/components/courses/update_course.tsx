import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/interface/course";
import { Course_formFields } from "../../util/formFields/Course_formField";
import { Link, useParams } from "react-router-dom";

const UpdateCourse = (props: { selectedCourse: Course }) => {
  const [updatedCourse, setUpdatedCourse] = useState<Course>(props.selectedCourse);
  const [submitted, setSubmitted] = useState(false);
  const { uniId } = useParams<{ uniId: string }>();

  const updateCourse = async (id: number) => {
    try {
      const response = await axios.put(`/api/course/${id}`, updatedCourse);
      console.log("Response:", response.data);
      setSubmitted(true);
    } catch (error: any) {
      console.log(error.message);
      console.log("Error:", updatedCourse);
      console.log("Error2:", props.selectedCourse);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateCourse(props.selectedCourse.id);
  };

  // issue :
  // i have selected course, possibly i have to send uniId too even tho it should be the same 
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log("target:", e.target);
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  return (
    <div>
      <h1>Update Course</h1>
      <form onSubmit={handleSubmit}>
        {Course_formFields.map((field) => (
          <div className="updateCourse" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={updatedCourse[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={updatedCourse[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit" disabled={submitted}>
          {submitted ? "Updated" : "Update"}
        </button>
      </form>
      <Link to={`/university/courses/${uniId}`}>
        <button className="back">Back</button>
      </Link>
    </div>

  );
};
export default UpdateCourse;
