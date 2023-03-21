import axios from "axios";
import { useState } from "react";
import { University } from "../../util/university";
import { University_formFields } from "../formFields/Univerity_formField";

const CreateUniversity = () => {
  const [university, setUniversity] = useState<Omit<University, "id">>({
    name: "",
    location: "",
    email: "",
    phone: "",
    description: "",
    website: "",
    image: "",
    rating: 0,
  });
 

  const createUniversity = async () => {
    try {
      const response = await axios.post("/api/university", university);
      console.log("Response data:", response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUniversity();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUniversity({ ...university, [name]: value });
  };

  return (
    <div>
      <h1>Create University</h1>
      <form>
        {University_formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={university[field.name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={university[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUniversity;
