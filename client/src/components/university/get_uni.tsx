import axios from "axios";
import { useEffect, useState } from "react";
import { University } from "../../util/interface/university";
import { DeleteUniversity } from "./delete_uni";
import { Link, useParams } from "react-router-dom";
import { UniversityByIdProps } from "../../util/interface/university_props";

export const UniversityById: React.FC<UniversityByIdProps> = ({ setSelectedUniversity }) => {
    const [university, setUniversity] = useState<University>({} as University);
    const { uniId } = useParams<{ uniId: string }>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUniversity = async (id: number) => {
        try {
            // Send a GET request to retrieve the university details
            const response = await axios.get(`/api/university/${id}`);
            console.log('Response:', response.data);
            setUniversity(response.data);
            setLoading(false);
            setSelectedUniversity(response.data);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        // Fetch the university details when the component mounts
        getUniversity(Number(uniId));
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
            <div className="info-container">
                {/* Render the university details */}
                {Object.keys(university).map((key: any) => (
                    key !== "id" && (
                        <div key={key} className="info-item">
                            {/* Transform the first letter of the key to capital */}
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <div id={key} className="info-value">
                                {university[key]}
                            </div>
                        </div>
                    )
                ))}
            </div>
            
            {/* Render the delete button */}
            <DeleteUniversity university={university} />

            {/* Render a link to update the university */}
            <Link to={`/university/update/${university.id}`}>
                <button className='button'>Update University</button>
            </Link>

            {/* Render a link to view the courses of the university */}
            <Link to={`/university/courses/${university.id}`}>
                <button className='button'>My Courses</button>
            </Link>
        </div>
    );
}
