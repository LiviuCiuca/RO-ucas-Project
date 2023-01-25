export type createCoursesParams = {
    name: string;
    description: string;
    price: number;
    duration: number;
};
//even tho we don`t have a similar situation like the password in the student entity
//i wanted to keep the code consistent
//all data i`m receiving from the client is validated in the dto