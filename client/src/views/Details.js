import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { House } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";


function Details() {
    const { userid } = useParams();

    const navigate = useNavigate();

    const [donorDetails, setDonorDetails] = useState({})
    const LoadDetailOfDonors = async (userid) => {
        toast.loading("Data is Loading ⌛...");
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URl}/Donors/${userid}`);
            toast.dismiss();
            toast.success("Data is Fetch 👍");
            setDonorDetails(response?.data?.data);
        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        LoadDetailOfDonors(userid);
    }, [userid])

    return (
        <>
            <div className='bg-secondary w-[100vw] h-[100vh]'>
                <p className='text-center text-xl font-medium pt-5'>Details Page</p>

                <div className='w-1/3 min-h-max text-justify cursor-pointer  bg-gray-200 m-auto p-5 rounded-xl mt-10 border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 leading-10'>
                    <p><span className='font-semibold'>Userid</span> : <span className='texxl'>{donorDetails.userid}</span></p>
                    <p><span className='font-semibold'>Name</span> : <span className='textxl'>{donorDetails.name}</span></p>
                    <p><span className='font-semibold'>Mobile No</span> : <span className='textxl'>{donorDetails.mobile}</span></p>
                    <p><span className='font-semibold'>BloodGroup</span> : <span className='textxl'>{donorDetails.bloodGroup}</span></p>
                    <p><span className='font-semibold'>Address</span> : <span className='textxl'>{donorDetails.address}</span></p>
                </div>

                <House size={50} className="fixed right-10 bottom-10 hover:scale-125 duration-300"
                    onClick={() => {
                        navigate("/")
                    }}
                />
                <Toaster />
            </div>
        </>
    )
}

export default Details