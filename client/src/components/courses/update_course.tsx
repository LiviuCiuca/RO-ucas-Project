import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/course";
import { Course_formFields } from "../../util/formFields/Course_formField";
import { Link } from "react-router-dom";

const UpdateCourse = (props: { selectedCourse: Course }) => {
  const [updatedCourse, setUpdatedCourse] = useState<Omit<Course, "enrollments">>(props.selectedCourse);
  const [formFields, setFormFields] = useState<Omit<Course, "enrollments">>(props.selectedCourse);
  const [submitted, setSubmitted] = useState(false);

  const updateCourse = async (id: number) => {
    try {
      const response = await axios.put(`/api/course/${id}`, updatedCourse);
      console.log("Response:", response.data);
      setSubmitted(true);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUpdatedCourse(formFields);
    updateCourse(props.selectedCourse.id);
  };

  // issue :
  // i have selected course, possibly i have to send uniId too even tho it should be the same 
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log("target:", e.target);
    setFormFields({ ...formFields, [name]: value });
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
                value={formFields[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formFields[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit" disabled={submitted}>
          {submitted ? "Updated" : "Update"}
        </button>
      </form>
      <Link to={`/university/courses/${props.selectedCourse.id - 1}`}>
        <button className='button'>Back</button>
      </Link>
    </div>

  );
};
export default UpdateCourse;
