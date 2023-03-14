import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../../util/student';
import CreateStudent from './create_student';

const StudentById = () => {
  const [student, setStudent] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //the id i should get from auth
  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get(`/api/student/${id}`);
      console.log('Response data:', response.data);
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
    return <div>
      <h1>Loading...</h1>
      </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  //here i should display the student data
  //gotta add the rest of the columns when i update main branch
  
  // const displayStudent = student.map((student) => (
  //   <li >
            
  //   </li>
  // ));

  return (
    <div>
      <h1>Student</h1>
      <CreateStudent/>
    </div>
  );
};

export default StudentById;
