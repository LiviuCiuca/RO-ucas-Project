import axios from "axios";
import { useEffect, useState } from "react";
import { University } from "../../util/university";
import { DeleteUniversity } from "./delete_uni";
import UpdateUniversity from "./update_uni";

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
   //key !== "id" && part checks if the current key is not equal to "id", and only renders the div element if it's true.
    return (
        <div>
            <h1>University</h1>
            <h3>
                {Object.keys(university).map((key: any) => (
                    key !== "id" && (
                        <div key={key}>
                            {key}: {university[key]}
                        </div>
                    )
                ))}
            </h3>
            <DeleteUniversity university={university}/>
            <UpdateUniversity university={university}/>
        </div>
    );
    

}