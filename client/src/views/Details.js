import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
function Details() {
    const { userid } = useParams();

    const [donorDetails, setDonorDetails] = useState({})
    const LoadDetailOfDonors = async (userid) => {
        try {
            const response = await axios.get(`http://localhost:5002/Donors/${userid}`);
            setDonorDetails(response?.data?.data);
        }
        catch (error) {
            console.log(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        LoadDetailOfDonors(userid);
    }, [])
    return (
        <div>
            <p>Details Page</p>
        </div>
    )
}

export default Details