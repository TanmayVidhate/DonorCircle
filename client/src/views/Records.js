import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../components/Cards';

function Records() {

  const [donors, setDonors] = useState([])

  const LoadData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/Donors")
      setDonors(response?.data?.data)
    }
    catch (error) {
      console.log(error?.response?.data?.message || error?.message);
    }
  }

  useEffect(() => {
    LoadData();
  }, [])
  return (
    <>
      <div className='bg-secondary w-[100%] h-[100%]'>

        <p className='text-center text-xl font-medium'>Show Records</p>

        <div className='m-10'>

          <div className='w-[100%] h-[80vh] flex flex-wrap flex-row justify-center overflow-y-scroll'>
            {
              donors.map((donor) => {
                const { userid, name, mobile } = donor
                return <Cards userid={userid} name={name} mobile={mobile} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Records;