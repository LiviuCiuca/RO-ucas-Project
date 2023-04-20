import axios from "axios";
import { useEffect, useState } from "react";
import { University } from "../../util/university";
import { University_formFields  } from "../../util/formFields/Univerity_formField";
import { Link, useParams } from "react-router-dom";

const UpdateUniversity = (props: { university: University }) => {
  const [updatedUniversity, setUpdatedUniversity] = useState<University>(props.university);
  const { uniId } = useParams<{ uniId: string }>(); 
  
  const updateUniversity = async (id: number) => {
    try {
      const response = await axios.put(`/api/university/${id}`, updatedUniversity);
      console.log('Response data:', response.data);
    } catch (error : any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUniversity(Number(uniId));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdatedUniversity({ ...updatedUniversity, [name]: value });
  };

  return (
    <div>
      <h1>Update University</h1>
      <form>
        {University_formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={updatedUniversity[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={updatedUniversity[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Update
        </button>
      </form>
      <Link to={`/university/${uniId}`}>
        <button>Back</button>
      </Link>

    </div>
  );
};

export default UpdateUniversity;