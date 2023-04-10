import { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../../util/student';
import DeleteStudent from './delete_student';
import UpdateStudent from './update_student';
import { Course } from '../../util/course';
import { Link, useParams } from "react-router-dom";

export const StudentById = (props: {selectedCourse: Course  | null}) => {
 
  const [student, setStudent] = useState<Student>({} as Student);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { studentId } = useParams<{ studentId: string }>(); 
  
  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get(`/api/student/${id}`);
      console.log('Response data:', response.data);
      setStudent(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
   
      getStudentById(Number(studentId));
  
  }, [studentId]);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  


  return (
    <div>
      <h1>Student</h1>
      <h3>
        {Object.keys(student).map((key: any) => (
          key !== "id" && (
            <div key={key}>
              {key}: {student[key]}
            </div>
          )
        ))}
      </h3>
      
      <DeleteStudent student={student} />
      <Link to={`/student/update/${student.id}`}>
        <button className='button'>Update Student</button>
      </Link>
      <Link to={`/student/courses/${student.id}`}>
        <button className='button'>View Courses</button>
      </Link>

      <Link to={`/student/enrollments/${student.id}`}>
        <button className='secoundButton'>View Enrollments</button>
      </Link>


    </div>
  );
};
