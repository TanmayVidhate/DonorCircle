import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import Inputsfields from '../components/Inputsfields';
import { House } from 'lucide-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function EditInfo() {
    const { userid } = useParams();

    const navigate = useNavigate();

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
            const response = await axios.get(`${process.env.REACT_APP_API_URl}/Donors/${userid}`)
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
            const response = await axios.put(`${process.env.REACT_APP_API_URl}/Donors/${userid}`,{
                name: formdata.name,
                mobile: formdata.mobile,
                address: formdata.address,
                bloodGroup: formdata.bloodGroup
            });
            

            setFormData({
                userid: "",
                name: "",
                mobile: "",
                address: "",
                bloodGroup: ""
            })
            toast.success(response?.data?.message);
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

                <div className='w-[300px] bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-5 m-auto mt-5 flex flex-col justify-items-center items-center '>
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


                    <button className='bg-red-600 m-3 w-full p-2.5 rounded text-sm text-stone-100  cursor-pointer'
                        onClick={(e) => {
                            EditRecords(userid);
                        }}

                    >
                        Edit
                    </button>

                </div>

                <House size={50} className="fixed right-0 bottom-0 hover:scale-125 duration-300"
                    onClick={() => {
                        navigate("/")
                    }}
                />

                <Toaster />
            </div>
        </>
    )
}

export default EditInfo;