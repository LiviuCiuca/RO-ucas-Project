import React, { useState, useEffect } from 'react';
import axios from 'axios';



const StudentById = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //the id i should get from auth
  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get(`/api/student/${id}`);
      setStudent(response.data);
      setLoading(false);
    } catch (error : any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = 1; 
    getStudentById(id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  //here i should display the student data
  //gotta add the rest of the columns when i update main branch
  const displayStudent= student.map(s => 
    <div>
      <p>s.name</p>
      <p>s.email</p>
      <p>s.age</p>
    </div> )
  return (
    <div>
      <h1>Student</h1>
      <h2>{displayStudent}</h2>
    </div>
  );
};

export default StudentById;
