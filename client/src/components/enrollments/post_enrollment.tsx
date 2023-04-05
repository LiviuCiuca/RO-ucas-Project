import axios from "axios";
import { Course } from "../../util/course";
import { Student } from "../../util/student";

export const CreateEnrollment = (props: { student: Student; course: Course }) => {

  const createEnrollment = async () => {
    try {
      const response = await axios.post("/api/enrollment", {
        student: props.student,
        course: props.course,
      });
      console.log(response.data);
    } catch (error: any) {
      console.error("Error creating enrollment:", error.message);
    }
  };

  return (
    <button onClick={createEnrollment}>
      Apply
    </button>
  );
};
