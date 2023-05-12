import axios from "axios";
import { useState, useEffect } from "react";
import { University } from "../../util/interface/university";
import { Link } from "react-router-dom";
import "../../util/css/all_style.css";

export const Universities = () => {
  const [universities, setUniversities] = useState<University>({} as University);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllUniversities = async () => {
    try {
      // Send a GET request to retrieve the list of universities
      const response = await axios.get("/api/university");
      console.log("Response data:", response.data);
      setUniversities(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the universities when the component mounts
    getAllUniversities();
  }, []);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleUniversitySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selectedUniversity = universities.find((university: University) => university.id === selectedId) || null;
    setSelectedUniversity(selectedUniversity);
    console.log(selectedUniversity);
  };

  return (
    <div>
      <h1>Universities Login</h1>
      {/* Render a dropdown to select a university */}
      <label htmlFor="university-select">Select a university:</label>
      <select
        value={selectedUniversity ? selectedUniversity.id : ""}
        onChange={handleUniversitySelection}
        style={{ width: "200px", height: "30px", marginBottom: "10px" }}
      >
        <option value="">Select a university</option>
        {universities.map((university: University) => (
          <option key={university.id} value={university.id}>
            {university.name}
          </option>
        ))}
      </select>
      {/* Render a link to create a new university */}
      <div className="create_university">
        <Link to="/createUni">
          <button type="button">Create University</button>
        </Link>
      </div>
      {/* Render a link to view the profile of the selected university */}
      <div className="university_profile">
        <Link to={`/university/${selectedUniversity?.id}`}>
          <button type="button" disabled={!selectedUniversity}>Profile University</button>
        </Link>
      </div>
    </div>
  );
};
