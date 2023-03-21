import axios from "axios";
import { useEffect, useState } from "react";
import { University } from "../../util/university";
import { DeleteUniversity } from "./delete_uni";

export const UniversityById = () => {
    const [university,setUniversity] = useState<University>({} as University);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const getUniversity = async (id:number) => {
        try {
            const response = await axios.get(`/api/university/${id}`);
            console.log('Response:', response.data);
            setUniversity(response.data);
            setLoading(false);
        } catch (error : any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        const id = 2; 
        getUniversity(id);
    }, []);
    
    if (loading) {
        return <div>
          <h1>Loading...</h1>
          </div>;
    }  
    if (error) {
        return <div>{error}</div>;
    }
    //map through the university object and display the key and value
    const universityInfo = Object.values(university).map((key) => (
        <div key={key}>
              {key} 
        </div>
    ));
    return (
        <div>
            <h1>University</h1>
            <h3>{universityInfo}</h3>
            <DeleteUniversity university={university}/>
        </div>
    );

}