export interface University {
    id: number;
    name: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    description: string;
    image: string;
    rating: number;
    [key: string]: any;
}
//might need courses[]