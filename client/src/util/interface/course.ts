export interface Course {
    id: number;
    name: string;
    description: string;
    duration: number;
    price: number;
    [key: string]: any;
}