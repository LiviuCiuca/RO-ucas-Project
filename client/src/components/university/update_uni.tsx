import axios from "axios";
import { useState } from "react";
import { University } from "../../util/interface/university";
import { University_formFields } from "../../util/formFields/Univerity_formField";
import { Link, useParams } from "react-router-dom";

const UpdateUniversity = (props: { university: University }) => {
  const [updatedUniversity, setUpdatedUniversity] = useState<University>(props.university);
  const { uniId } = useParams<{ uniId: string }>();
  const [updated, setUpdated] = useState(false);

  const updateUniversity = async (id: number) => {
    try {
      // Send a PUT request to update the university details
      const response = await axios.put(`/api/university/${id}`, updatedUniversity);
      console.log('Response data:', response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUniversity(Number(uniId));
    setUpdated(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdatedUniversity({ ...updatedUniversity, [name]: value });
  };

  return (
    <div>
      <h1>Update University</h1>
      <form>
         {/* Render input fields for each property in the student object */}
        {University_formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={updatedUniversity[field.name]}
                onChange={handleChange}
                required // Added required attribute to make the field mandatory
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={updatedUniversity[field.name]}
                onChange={handleChange}
                required // Added required attribute to make the field mandatory
              />
            )}
          </div>
        ))}
        <button type="submit" onClick={handleSubmit} disabled={updated}>
          {updated ? "Updated" : "Update"}
        </button>
      </form>
      <Link to={`/university/${uniId}`}>
        <button className="back">Back</button>
      </Link>
    </div>
  );
};

export default UpdateUniversity;
