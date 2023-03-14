import { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../../util/student';
import CreateStudent from './create_student';
import DeleteStudent from './delete_student';
import UpdateStudent from './update_student';

const StudentById = () => {
  const id = 1; 
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
  //gotta separate them into specific colums to css them

  
  return (
    <div>
      <h1>Student</h1>
      <h3>{Object.keys(student).map((key:any) => (
        <div key={key}>
           {key}: {student[key]}
        </div>
      ))}</h3>
      <CreateStudent/>
      <DeleteStudent/>
      <UpdateStudent student={student[1]}/>

    </div>
  );
};

export default StudentById;
