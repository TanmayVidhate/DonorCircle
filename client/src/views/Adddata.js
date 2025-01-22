import React from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom';
import { House } from 'lucide-react';


function Adddata() {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-secondary w-[100vw] h-[100vh]'>

                <p className='text-center text-xl font-medium pt-5'>Add Records</p>

                <Form />

                <House size={50} className="fixed right-10 bottom-10 hover:scale-125 duration-300"
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </div>
        </>
    )
}

export default Adddata