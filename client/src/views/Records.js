import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Cards from '../components/Cards';

function Records() {

  const [donors, setDonors] = useState([])

  const LoadData = async () => {
    toast.loading("Data is Loading ⌛...")
    try {
      const response = await axios.get("http://localhost:5002/Donors")
      toast.dismiss();
      toast.success("Data fetch 👍");
      setDonors(response?.data?.data);
      
    }
    catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  }

  useEffect(() => {
    LoadData();
  }, [])
  return (
    <>
      <div className='bg-secondary w-[100vw] h-[100vh]'>

        <p className='text-center text-xl font-medium pt-5'>Show Records</p>

        <div className='m-5'>

          <div className='w-[100%] h-[80vh] overflow-hidden flex flex-wrap flex-row justify-center overflow-y-scroll'>
            {
              donors.map((donor, i) => {
                const { userid, name, mobile, bloodGroup } = donor
                return <Cards userid={userid} name={name} mobile={mobile} bloodGroup={bloodGroup} key={i} />
              })
            }
          </div>
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default Records;