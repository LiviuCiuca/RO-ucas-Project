import { Route, Routes } from 'react-router-dom';
import { DeleteUniversity } from '../university/delete_uni';
import { UniversityById } from '../university/get_uni';
import UpdateUniversity from '../university/update_uni';
import { useState } from 'react';
import { University } from '../../util/interface/university';
import { Parent_CourseComponent } from './courses';

export const Parent_universityComponent = () => {
    const [selectedUniversity, setSelectedUniversity] = useState<University>({} as University);

    return (
        <>
            <Routes>
                <Route
                //this populates the selectedUniversity state with the university object
                    path="/:uniId"
                    element={<UniversityById setSelectedUniversity={setSelectedUniversity}/>}
                />
                <Route
                    path="/update/:uniId"
                    element={<UpdateUniversity university={selectedUniversity} />}
                />
                <Route
                    path="/courses/:uniId/*"
                    element={<Parent_CourseComponent />}
                />
            </Routes>
        </>
    )
};
