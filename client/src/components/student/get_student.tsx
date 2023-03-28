import { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../../util/student';
import CreateStudent from './create_student';
import DeleteStudent from './delete_student';
import UpdateStudent from './update_student';
import { Students } from './get_all_students';

const StudentById = () => {
  const id = 15; 
  const [student, setStudent] = useState<Student>({} as Student);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Student</h1>
      <h3>{Object.keys(student).map((key: any) => (
        <div key={key}>
           {key}: {student[key]}
        </div>
      ))}</h3>
      <Students/>
      <CreateStudent/>
      <DeleteStudent student={student}/>
      <UpdateStudent student={student}/>

    </div>
  );
};

export default StudentById;
