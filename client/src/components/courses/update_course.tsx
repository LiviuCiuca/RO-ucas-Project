import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/course";

const UpdateCourse = (props: {course: Course}) => {
    const {course} = props;
    const [updatedCourse, setUpdatedCourse] = useState<Omit<Course, "enrollments">>({
        name: "",
        description: "",
        duration: 0,
        price: 0,
    });
    const updateCourse = async (id: number) => {
        try {
        const response = await axios.put(`/api/course/${id}`, updatedCourse);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };
    console.log(course.id);
    
    //should import the course id from auth
    return (
        <div>
        <h1>Update Course</h1>
        <button onClick={() => updateCourse(course.id)}>Update</button>
        </div>
    );
};