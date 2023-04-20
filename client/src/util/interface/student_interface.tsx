import { Student } from "../student";

export interface StudentByIdProps {
    setSelectedStudent : (student: Student) => void;
}