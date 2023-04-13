import axios from "axios";
import { useState, useEffect } from "react";
import { University } from "../../util/university";
import { Link } from "react-router-dom";
import CreateUniversity from "./create_uni";

export const Universities = () => {
  const [universities, setUniversities] = useState<University>({} as University);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllUniversities = async () => {
    try {
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
    const selectedUniversity = universities.find((university : University) => university.id === selectedId) || null;
    setSelectedUniversity(selectedUniversity);
    console.log(selectedUniversity);
  };

  return (
    <div>
      <h1>Universities</h1>
      <label htmlFor="university-select">Select a university:</label>
      <select
        value={selectedUniversity ? selectedUniversity.id : ""}
        onChange={handleUniversitySelection}
        style={{ width: "200px", height: "30px", marginBottom: "10px" }}
      >
        <option value="">Select a university</option>
        {universities.map((university :University) => (
          <option key={university.id} value={university.id}>
            {university.name}
          </option>
        ))}
      </select>
      <div className="create_university">
        <Link to="/createUni">
          <button>Create University</button>
        </Link>
      </div>
      <div className="university_profile">
        <Link to={`/university/${selectedUniversity?.id}`}>
          <button disabled={!selectedUniversity}>Profile University</button>
        </Link>
      </div>
    </div>
  );
};
