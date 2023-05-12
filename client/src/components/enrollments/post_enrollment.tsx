import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/interface/course";
import { Student } from "../../util/interface/student";

export const CreateEnrollment = (props: { student: Student; course: Course }) => {
  const [submitted, setSubmitted] = useState(false); // State to track if the enrollment has been submitted

  const createEnrollment = async () => {
    try {
      const response = await axios.post("/api/enrollment", {
        student: props.student,
        course: props.course,
      }); // Sending a POST request to create the enrollment

      console.log(response.data);
      setSubmitted(true); // Marking the enrollment as submitted
    } catch (error: any) {
      console.error("Error creating enrollment:", error.message);
      console.log("student:", props.student);
      console.log("course:", props.course);
    }
  };

  return (
    <button type="button" onClick={createEnrollment} disabled={submitted}>
      {submitted ? "Applied" : "Apply"}
    </button>
  );
};

// possible error: if i refresh then i can apply again to the same course
// to prevent this behavior, could consider implementing additional logic on the server-side 
//to check if the enrollment already exists before creating a new one.