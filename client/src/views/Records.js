import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { UserPlus } from 'lucide-react';

import Cards from '../components/Cards';

function Records() {

  const navigate = useNavigate();

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

          <div className='w-[95vw] h-[70vh] overflow-hidden flex flex-wrap m-auto flex-row items-center justify-center overflow-y-scroll'>
            {
              donors.map((donor, i) => {
                const { userid, name, mobile, bloodGroup } = donor
                return <Cards userid={userid} name={name} mobile={mobile} bloodGroup={bloodGroup} key={i} />
              })
            }
          </div>
        </div>
        <UserPlus size={50} className="fixed right-10 bottom-10 hover:scale-125 duration-300" onClick={() => {
          navigate("/addinfo")
        }
        } />



        <Toaster />
      </div>
    </>
  )
}

export default Records;