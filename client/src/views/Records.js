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
      <div className=''>
        <div className=''>
          {
            donors.map((donor) => {
              const{userid,name,mobile} = donor
              return <Cards userid={userid} name={name} mobile={mobile}  />
            })
          }

        </div>
      </div>

    </>
  )
}

export default Records;