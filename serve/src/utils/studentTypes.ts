export type createStudentParams = {
    id: number;
    username: string;
    password: string;
    age: number;
    enrollments: any;
};

export type updateStudentParams = {
    username: string;
    password: string;
    age: number;
};
// reason for creating this and not reusing Dto is when the user might send additional data that we don't want to save in the database
// for example: when creating a registration form we typicaly have an additional field to confirm password, we don't want to save that in the database
// this are the actual finallised fields that represent the database  