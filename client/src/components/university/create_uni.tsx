import axios from "axios";
import { useState } from "react";
import { University } from "../../util/interface/university";
import { University_formFields } from "../../util/formFields/Univerity_formField";
import { Link } from "react-router-dom";

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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const createUniversity = async () => {
    setLoading(true);
    try {
      // Send a POST request to create a new university with the provided data
      const response = await axios.post("/api/university", university);
      console.log("Response data:", response.data);
      setMessage("University created successfully!");
    } catch (error: any) {
      console.log(error.message);
      setMessage("Failed to create university. Please try again.");
    } finally {
      setLoading(false);
      setSubmitted(true);
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
        {/* Render input fields for each property in the university object */}
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
        <button type="button" onClick={handleSubmit} disabled={loading || submitted}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/university">
        <button type="button">Back</button>
      </Link>
    </div>
  );
};

export default CreateUniversity;
