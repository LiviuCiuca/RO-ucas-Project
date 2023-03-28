import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/course";
import { Course_formFields } from "../../util/formFields/Course_formField";

const UpdateCourse = (props: {course: Course}) => {
    const {course} = props;
    const [updatedCourse, setUpdatedCourse] = useState<Omit<Course, "enrollments">>({
        name: "",
        description: "",
        duration: 0,
        price: 0,
    });
    //have to check api
    
    const updateCourse = async (id: number) => {
        try {
        const response = await axios.put(`/api/course/${id}`, updatedCourse);
        console.log('Response:', response.data);
        } catch (error : any) {
        console.log(error.message);
        }
    };

    console.log(course.id);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateCourse(course.id);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUpdatedCourse((prevState) => ({ ...prevState, [name ]: value }));
    };
    
    //should import the course id from auth
    return (
        <div>
        <h1>Update Course</h1>
        <form onSubmit={handleSubmit}>
            {Course_formFields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            value={course[field.name ]}
                            onChange={handleChange}
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={course[field.name ]}
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}
            <button type="submit">
                Update
            </button>
        </form>
    </div>
    );
};
export default UpdateCourse;