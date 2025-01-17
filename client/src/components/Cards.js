import React from 'react'
import { Eye, UserRoundPen, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Cards({ userid, name, mobile, bloodGroup }) {

    const DeletedFunctions = async (userid) => {
        toast.loading("Data is Loading... ⌛");

        try {
            await axios.delete(`http://localhost:5002/Donors/${userid}`);
            toast.dismiss();
            window.location.reload();
            toast.success("Data Fetch");
        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message);
        }
    }

    const navigate = useNavigate();
    return (
        <>
            <div className='w-1/4 min-h-max shadow-lg bg-gray-200 leading-10 shadow-gray-800 p-4 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 relative cursor-pointer' key={userid}>
                <div className='font-normal text-base'><span>Userid</span> : <span className='font-semibold'>{userid}</span></div>
                <div className='font-normal text-base'><span>Name</span> : <span>{name}</span></div>
                <div className='font-normal text-base'><span>Mobile</span> : <span>{mobile}</span></div>
                <div className='font-normal text-base'><span >BloodGroup</span> : <span className='font-semibold'>{bloodGroup}</span></div>


                <Eye size={25} className="hover:scale-125 duration-300 absolute right-5 top-5" onClick={() => {
                    navigate(`/details/${userid}`)
                }
                } />

                <UserRoundPen size={25} className="absolute right-5 top-12  hover:scale-125 duration-300" onClick={() => {
                    // navigate("/addinfo")
                }
                } />

                <Trash2 size={25} className="absolute right-5 top-20  hover:scale-125 duration-300" onClick={() => {
                    DeletedFunctions(userid);
                }
                } />
            </div>
            <Toaster />
        </>
    )
}

export default Cards