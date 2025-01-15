import React, { useEffect } from 'react'
import axios from 'axios';

function Records() {
  const LoadData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/Donors")
      console.log(response?.data?.data)
    }
    catch (error) {
      console.log(error?.message);
    }
  }

  useEffect(() => {
    LoadData();
  }, [])
  return (
    <>
      <p>Records</p>

    </>
  )
}

export default Records;