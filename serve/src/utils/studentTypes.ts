export type createStudentParams = {
    id: number;
    name: string;
    username: string;
    password: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    contactDetails: string;
    personalStatement: string;
    whyTheCourse: string;
    education: string;
    workExperience: string;
    skills: string;
    interests: string;
    references: string;
};

export type updateStudentParams = {
    name: string;
    username: string;
    password: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    contactDetails: string;
    personalStatement: string;
    whyTheCourse: string;
    education: string;
    workExperience: string;
    skills: string;
    interests: string;
    references: string;
};
// reason for creating this and not reusing Dto is when the user might send additional data that we don't want to save in the database
// for example: when creating a registration form we typicaly have an additional field to confirm password, we don't want to save that in the database
// this are the actual finallised fields that represent the database  