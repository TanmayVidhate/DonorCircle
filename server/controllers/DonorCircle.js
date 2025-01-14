import Donor from '../models/Donor.js';


const getHome = (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcom To DonorCircle"
    })
}

const getDonors = async (req, res) => {
    try {
        const saveData = await Donor.find();

        res.status(200).json({
            success: true,
            data: saveData,
            message: "Data fetch"
        })
    }
    catch (error) {
        console.log(error)
    }
}

const postDonors =  async (req, res) => {

    try {
        const { name, mobile, address, bloodGroup } = req.body;

        if (!name || !mobile || !address || !bloodGroup) {
            const missingFields = [];
            if (!name) missingFields.push("Name");
            if (!mobile) missingFields.push("Mobile");
            if (!address) missingFields.push("Address");
            if (!bloodGroup) missingFields.push("Blood Group");
        
            return res.status(400).json({
                success: false,
                message: `Please enter the following fields: ${missingFields.join(", ")}`
            });
        }


        const newData = new Donor({
            name: name,
            mobile: mobile,
            address: address,
            bloodGroup: bloodGroup
        });

        const savedData = await newData.save();

        res.status(201).json({
            success: true,
            data: savedData,
            message: "Donor data added.. "
        })
    }
    catch (error) {
        console.log(error);
    }
}



export{
    getHome,postDonors,getDonors
}