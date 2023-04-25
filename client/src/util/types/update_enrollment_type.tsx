import { Enrollment } from "../interface/enrollment";

export type UpdateEnrollmentProps = {
    enrollment: Enrollment;
    onEnrollmentUpdate: () => void; // define the prop type
};