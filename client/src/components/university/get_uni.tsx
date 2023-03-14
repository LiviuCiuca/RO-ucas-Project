import axios from "axios";
import { useEffect, useState } from "react";
import { University } from "../../util/university";

const University = () => {
    const [university,setUniversity] = useState<University[]>([]);
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
        const id = 1; 
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

    return (
        <div>
            <h1>University</h1>
        </div>
    );

}
