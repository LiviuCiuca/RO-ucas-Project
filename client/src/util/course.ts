export interface Course {
    name: string;
    description: string;
    duration: number;
    price: number;
    [key: string]: any;
}