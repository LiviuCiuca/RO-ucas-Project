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
            <DeleteUniversity university={university} />
            <Link to={`/university/update/${university.id}`}>
                <button className='button'>Update University</button>
            </Link>
            <Link to={`/university/courses/${university.id}`}>
                <button className='button'>My Courses</button>
            </Link>
          

        </div>
    );


}