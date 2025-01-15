import React from 'react'
import { Eye } from 'lucide-react';
function Cards({ userid=123, name, mobile }) {
    return (
        <>
            <div className='w-1/4 h-48 shadow-lg bg-gray-100  shadow-gray-800 p-4 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 relative cursor-pointer' key={userid}>
                <div className='font-semibold text-2xl'>{userid}</div>
                <div className='font-normal text-base'>{name}</div>
                <div className='font-normal text-base'>{mobile}</div>
                
                <Eye size={25} className="absolute right-5 top-3"/>
            </div>
        </>
    )
}

export default Cards