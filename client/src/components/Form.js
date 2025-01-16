import React from 'react'
import Inputsfields from './Inputsfields'


function Form() {
    return (
        <>
            <div className='bg-secondary mt-5 '>
                <div className='w-1/4 border-2 border-solid border-gray-600 m-auto flex flex-col justify-items-center items-center rounded '>

                    <Inputsfields
                        type={'number'}
                        name={'t1'}
                        placeholder={'Enter Userid'}
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t2'}
                        placeholder={'Enter Name'}
                    />

                    <Inputsfields
                        type={'number'}
                        name={'t3'}
                        placeholder={'Enter Mobile No'}
                    />

                    <Inputsfields
                        type={'number'}
                        name={'t4'}
                        placeholder={'Enter Address'}
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t5'}
                        placeholder={'Enter BloodGroup'}
                    />


                    <button className='bg-red-600 p-1 m-3 w-3/4 rounded text-sm text-stone-100  cursor-pointer'
                    
                    
                    >
                        Add
                    </button>

                </div>
            </div>
        </>
    )
}

export default Form