import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "../../util/course";
import { Course_formFields } from "../../util/formFields/Course_formField";

export const CreateCourse = () => {
    const [course, setCourse] = useState<Omit<Course, "enrollments">>({
        name: "",
        description: "",
        duration: 0,
        price: 0,
    });

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
        const uniId = 2;
        createCourse(uniId);   
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCourse((prevState) => ({ ...prevState, [name ]: value }));
    };

    return (
        <div>
            <h1>Create Course</h1>
            <form onSubmit={handleSubmit}>
                {Course_formFields.map((field) => (
                    <div className="createCourse" key={field.name}>
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
                    Create
                </button>
            </form>
        </div>
    );
};

