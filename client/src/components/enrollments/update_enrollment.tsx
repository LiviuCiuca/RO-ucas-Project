import axios from "axios";
import { useEffect, useState } from "react";
import { Enrollment } from "../../util/interface/enrollment";
import { UpdateEnrollmentProps } from "../../util/interface/update_enrollment";

const UpdateEnrollment = (props: UpdateEnrollmentProps) => {
    const [updatedEnrollment, setUpdatedEnrollment] = useState<Enrollment>(
        props.enrollment
    );
    const [clickedButton, setClickedButton] = useState<string>("");

    const updateEnrollment = async (enrollment: Enrollment) => {
        try {
            const response = await axios.put(
                `/api/enrollment/${updatedEnrollment.id}/status`,
                enrollment
            );
            console.log("Response data:", response.data);
            props.onEnrollmentUpdate();
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        updateEnrollment(updatedEnrollment);
    }, [updatedEnrollment]);

    const handleAccept = () => {
        setClickedButton("Accept");
        setUpdatedEnrollment((prevState) => ({
            ...prevState,
            status: "Accepted",
        }));
    };

    const handleReject = () => {
        setClickedButton("Reject");
        setUpdatedEnrollment((prevState) => ({
            ...prevState,
            status: "Rejected",
        }));
    };

    return (
        <div className="updateEnrollment">
            <button type="button" onClick={handleAccept}>
                Accept
            </button>
            <button type="button" onClick={handleReject}>
                Reject
            </button>
        </div>
    );
};

export default UpdateEnrollment;
