import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Inputsfields from '../components/Inputsfields';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function EditInfo() {
    const { userid } = useParams();

    const [formdata, setFormData] = useState({
        userid: "",
        name: "",
        mobile: "",
        address: "",
        bloodGroup: ""
    });


    useEffect(() => {
        LoadDonorDataByUserid(userid);
    }, [userid]);

    const LoadDonorDataByUserid = async (userid) => {
        toast.loading("Data Loading... ⌛")
        try {
            toast.dismiss();
            const response = await axios.get(`http://localhost:5002/Donors/${userid}`)
            setFormData(response?.data?.data);
            toast.success("Data is Loading 👍");
        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message || error?.message)
        }
    }

    const EditRecords = async (userid) => {
        toast.loading("Loading Data... ⌛")
        try {
            toast.dismiss();
            const response = await axios.put(`http://localhost:5002/Donors/${userid}`, {
                name: formdata.name,
                mobile: formdata.mobile,
                address: formdata.address,
                bloodGroup: formdata.bloodGroup
            });
            toast.success("Data Edit 👍");

        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message || error?.message)
        }
    }

    return (
        <>
            <div className='bg-secondary w-[100vw] h-[100vh]'>

                <p className='text-center text-xl font-medium pt-5'>Edit Records</p>

                <div className='w-1/4 border-2 bg-gray-200  border-solid border-gray-600 m-auto flex flex-col justify-items-center items-center rounded '>
                    <Inputsfields
                        type={'number'}
                        name={'t1'}
                        placeholder={'Enter Userid'}
                        value={formdata.userid}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                userid: e.target.value
                            })
                        }}
                        disabled
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t2'}
                        placeholder={"Enter Name"}
                        value={formdata.name}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                name: e.target.value
                            })
                        }}
                    />

                    <Inputsfields
                        type={'number'}
                        name={'t3'}
                        placeholder={'Enter Mobile No'}
                        value={formdata.mobile}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                mobile: e.target.value
                            })
                        }}
                        disabled
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t4'}
                        placeholder={'Enter Address'}
                        value={formdata.address}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                address: e.target.value
                            })
                        }}
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t5'}
                        placeholder={'Enter BloodGroup'}
                        value={formdata.bloodGroup}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                bloodGroup: e.target.value
                            })
                        }}
                    />


                    <button className='bg-red-600 p-1 m-3 w-3/4 rounded text-sm text-stone-100  cursor-pointer'
                        onClick={(e) => {
                            EditRecords(userid);
                        }}

                    >
                        Edit
                    </button>

                </div>

                <Toaster />
            </div>
        </>
    )
}

export default EditInfo;