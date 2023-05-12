import axios from "axios";
import { useState, useEffect } from "react";
import { Enrollment } from "../../util/interface/enrollment";
import { Link, useParams } from "react-router-dom";

// Shows all enrollments of a student
export const Enrollmen = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]); 
  const { studentId } = useParams<{ studentId: string }>(); // Accessing the studentId from the URL parameter

  const [loading, setLoading] = useState(true); // State to track the loading status
  const [error, setError] = useState(null); // State to track any errors

  const getEnrollments = async (id: number) => {
    try {
      const response = await axios.get(`/api/enrollment/${id}`); // Fetching the enrollments for the specific student
      console.log("Response data:", response.data);
      setEnrollments(response.data); // Updating the enrollments in the state
      setLoading(false); 
    } catch (error: any) {
      setError(error.message); // Setting the error message 
      setLoading(false); // Marking the loading as complete
    }
  };

  useEffect(() => {
    getEnrollments(Number(studentId)); 
  }, [studentId]);

  if (loading) {
    return <div><h1>Loading...</h1></div>; // Display a loading message 
  }

  if (error) {
    return <div>{error}</div>; // Display an error message 
  }

  return (
    <div>
      <h1>My Applications</h1>
      <div className="enrollment">
        {enrollments.map((enrollment: Enrollment) => (
          <div className="enrollment2" key={enrollment.id}>
            <p>Course name: {enrollment.course.name}</p>
            <p>Application status: {enrollment.status}</p>
            <br />
          </div>
        ))}
      </div>
      <Link to={`/student/${studentId}`}>
        <button className="back">Back</button>
      </Link>
    </div>
  );
};
