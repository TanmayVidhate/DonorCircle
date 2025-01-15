import React from 'react'
import MainImag from '../assets/im'
function Landing() {
    return (
        <>
            <h2 className='text-center font-medium text-4xl m-2 text-primary'>DonorCircle</h2>

            <h4 className='text-center text-2xl font-medium mt-1'>Save Lives,Donate Blood</h4>

            <div className=''>
                <img src={bloddImag} alt='image1'/>
            </div>
        </>
    )
}

export default Landing;