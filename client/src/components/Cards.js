import React from 'react'
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Cards({ userid = userid, name = name, mobile = mobile, bloodGroup = bloodGroup }) {

    const navigate = useNavigate();
    return (
        <>
            <div className='w-1/4 min-h-max shadow-lg bg-gray-200 leading-10 shadow-gray-800 p-4 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 relative cursor-pointer' key={userid}>
                <div className='font-normal text-base'><span>Userid</span> : <span className='font-semibold'>{userid}</span></div>
                <div className='font-normal text-base'><span>Name</span> : <span>{name}</span></div>
                <div className='font-normal text-base'><span>Mobile</span> : <span>{mobile}</span></div>
                <div className='font-normal text-base'><span >BloodGroup</span> : <span className='font-semibold'>{bloodGroup}</span></div>


                <Eye size={25} className="hover:scale-125 duration-300 absolute right-5 top-3" onClick={() => {
                    navigate(`/details/${userid}`)
                }
                } />
            </div>
        </>
    )
}

export default Cards