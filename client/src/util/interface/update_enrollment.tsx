import { Enrollment } from "./enrollment";

export type UpdateEnrollmentProps = {
    enrollment: Enrollment;
    onEnrollmentUpdate: () => void; // define the prop type
};