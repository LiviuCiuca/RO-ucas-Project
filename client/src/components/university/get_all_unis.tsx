import axios from "axios";
import { useState, useEffect } from "react";
import { University } from "../../util/university";
import CreateUniversity from "./create_uni";

export const Universities = () => {
    const [universities, setUniversities] = useState<University>({} as University);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllUniversities = async () => {
        try {
            const response = await axios.get("/api/university");
            console.log("Response data:", response.data);
            setUniversities(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUniversities();
    }, []);

    if (loading) {
        return <div><h1>Loading...</h1></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const displayUniversities = universities.map((university: University) => (
            <div key={university.id}>
                Name: {university.name}  
            </div>
        ));
    return (
        <div>
            <h1>Universities</h1>
            <h3>{displayUniversities}</h3>
            <CreateUniversity/>
        </div>
    );
};