import axios from "axios";
import { useEffect, useState } from "react";

const updateUniversity = async (id:number) => {
    try {
        const response = await axios.put(`/api/university/${id}`);
        console.log('Response:', response.data);
    } catch (error : any) {
        console.log(error.message);
    }
    return (
        <div>
        <h1>Update Student</h1>
        <button onClick={() => updateUniversity(1)}>Update</button>
        </div>
    );
};
