import React, { useState } from 'react'
import Inputsfields from './Inputsfields'
import axios from 'axios';
import toast from 'react-hot-toast';


function Form() {

    

    const [formdata, setFormData] = useState({
        userid: "",
        name: "",
        mobile: "",
        address: "",
        bloodGroup: ""
    });

    const AddFormData = async () => {

        try {
            const response = await axios.post("http://localhost:5002/Donors", {
                userid: formdata.userid,
                name: formdata.name,
                mobile: formdata.mobile,
                address: formdata.address,
                bloodGroup: formdata.bloodGroup
            })
            console.log(response);

            toast.loading("Data is storing ✍...")

            toast.success("Data Add 👍");

            setFormData({
                userid: "",
                name: "",
                mobile: "",
                address: "",
                bloodGroup: ""
            })
            toast.dismiss();
        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message)
        }
    }

    
    return (
        <>
            <div className='bg-secondary mt-5 '>
                <div className='w-1/4 border-2 bg-gray-200  border-solid border-gray-600 m-auto flex flex-col justify-items-center items-center rounded '>
                    <Inputsfields
                        type={'number'}
                        name={'t1'}
                        placeholder={'Enter Userid'}
                        value={formdata?.userid}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                userid: e.target.value
                            })
                        }}
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t2'}
                        placeholder={"Enter Name"}
                        value={formdata?.name}
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
                        value={formdata?.mobile}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                mobile: e.target.value
                            })
                        }}
                    />

                    <Inputsfields
                        type={'text'}
                        name={'t4'}
                        placeholder={'Enter Address'}
                        value={formdata?.address}
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
                        value={formdata?.bloodGroup}
                        onChange={(e) => {
                            setFormData({
                                ...formdata,
                                bloodGroup: e.target.value
                            })
                        }}
                    />


                    <button className='bg-red-600 p-1 m-3 w-3/4 rounded text-sm text-stone-100  cursor-pointer'
                        onClick={() => {
                            AddFormData();
                        }}

                    >
                        Add
                    </button>

                </div>
            </div>
        </>
    )
}

export default Form;