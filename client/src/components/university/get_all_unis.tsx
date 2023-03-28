import axios from "axios";
import { useState, useEffect } from "react";
import { University } from "../../util/university";

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

    return (
        <div>
            <h1>Universities</h1>
            <h3>{universities.map((university:University) => (
                <div key={university.id}>
                    {university.name}
                </div>
            ))}</h3>
        </div>
    );
};