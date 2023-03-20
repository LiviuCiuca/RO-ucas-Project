import axios from "axios";
import { useState } from "react";
import { Course } from "../../util/course";
import { Course_formFields } from "../formFields/Course_formField";

export const CreateCourse = () => {
    const [course, setCourse] = useState<Omit<Course, "enrollments">>({
        name: "",
        description: "",
        duration: 0,
        price: 0,
    });

    // We need to make sure that the types for the name attribute in the input and textarea elements are properly inferred by TypeScript. 
    type CourseKey = keyof Omit<Course, "enrollments">;

    const createCourse = async (id :number) => {
        try {
            const response = await axios.post(`/api/course/${id}`, course);
            console.log("Response data:", response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        createCourse(1);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCourse((prevState) => ({ ...prevState, [name as CourseKey]: value }));
    };

    return (
        <div>
            <h1>Create Course</h1>
            <form onSubmit={handleSubmit}>
                {Course_formFields.map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                value={course[field.name as CourseKey]}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={course[field.name as CourseKey]}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

