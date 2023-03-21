import axios from "axios";
import { useState } from "react";
import { Enrollment } from "../../util/enrollment";
//this is for uni to accept or reject a student

const UpdateEnrollment = (props: { enrollment: Enrollment }) => {
    const [updatedEnrollment, setUpdatedEnrollment] = useState<Enrollment>(props.enrollment);
    
    const updateEnrollment = async (id: number) => {
        try {
        const response = await axios.put(`/api/enrollment/${id}`, updatedEnrollment);
        console.log("Response data:", response.data);
        } catch (error: any) {
        console.log(error.message);
        }
    };
    
    const handleSubmit = (e: any) => {
        e.default();
        updateEnrollment(props.enrollment.id);
    };
    
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log("target:", e.target);
        setUpdatedEnrollment({ ...updatedEnrollment, [name]: value });
    };
    
    return (
        <div>
        <h1>Create Enrollment</h1>
            <div>
            <label htmlFor="status">Status: </label>
            <input
                type="text"
                name="status"
                value={updatedEnrollment.status}
                onChange={handleChange}
            />
            </div>
            <button type="button" onClick={handleSubmit}>
            Update
            </button>
        
        </div>
    );
};
export default UpdateEnrollment;