import { Route, Routes } from 'react-router-dom';
import { DeleteUniversity } from '../university/delete_uni';
import { UniversityById } from '../university/get_uni';
import UpdateUniversity from '../university/update_uni';
import { useState } from 'react';
import { University } from '../../util/university';
import { Enrollments } from '../enrollments/get_all_enrollments';

export const Parent_universityComponent = () => {
    const [selectedUniversity, setSelectedUniversity] = useState<University>({} as University);

return (
    <>
        <Routes>
            <Route 
            path="/:uniId" 
            element={<UniversityById />} 
            />
            <Route 
            path="/delete/:uniId" 
            element={<DeleteUniversity university={selectedUniversity} />} 
            />
            <Route 
            path="/update/:uniId" 
            element={<UpdateUniversity university={selectedUniversity} />} 
            />
            <Route
            path="/:enrollments/:uniId"
            element={<Enrollments />}
            />
        </Routes>
    </>
)};
