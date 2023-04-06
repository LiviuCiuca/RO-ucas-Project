import axios from "axios";
import { useState } from "react";
import { Enrollment } from "../../util/enrollment";

const UpdateEnrollment = (props: { enrollment: Enrollment }) => {
    const [updatedEnrollment, setUpdatedEnrollment] = useState<Enrollment>(props.enrollment);
    const [clickedButton, setClickedButton] = useState<string>("");

    const updateEnrollment = async (id: number) => {
        try {
            const response = await axios.put(`/api/enrollment/${id}`, updatedEnrollment);
            console.log("Response data:", response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const handleAccept = () => {
        setUpdatedEnrollment({ ...updatedEnrollment, status: "Accepted" });
        setClickedButton("Accept");
        updateEnrollment(props.enrollment.id);
    };

    const handleReject = () => {
        setUpdatedEnrollment({ ...updatedEnrollment, status: "Rejected" });
        setClickedButton("Reject");
        updateEnrollment(props.enrollment.id);
    };

    return (
        <div className="updateEnrollment">
            <button type="button" onClick={handleAccept} disabled={clickedButton === "Reject" || updatedEnrollment.status === "Accepted"}>
                    Accept
            </button>
            <button type="button" onClick={handleReject} disabled={clickedButton === "Accept" || updatedEnrollment.status === "Rejected"}>
                    Reject
            </button>
        </div>
    );
};
export default UpdateEnrollment;
