import React from 'react'
import { useParams } from 'react-router-dom';
import Form from '../components/Form';

function EditInfo() {
    const userid = useParams();

    console.log(userid)
    return (
        <>
            <div className='bg-secondary w-[100vw] h-[100vh]'>

                <p className='text-center text-xl font-medium pt-5'>Edit Records</p>

                <Form />


            </div>
        </>
    )
}

export default EditInfo;