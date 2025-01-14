import Donor from '../models/Donor.js';


const getHome = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcom To DonorCircle"
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
        return res.status(400).json({
            success: true,
            message: error.message
        })
    }
}

const postDonors = async (req, res) => {

    try {
        const { userid, name, mobile, address, bloodGroup } = req.body;

        //api validations
        if (!userid || !name || !mobile || !address || !bloodGroup) {
            const missingterm = [];
            if (!userid) missingterm.push("User Id");
            if (!name) missingterm.push("Name");
            if (!mobile) missingterm.push("Mobile");
            if (!address) missingterm.push("Address");
            if (!bloodGroup) missingterm.push("Blood Group");

            return res.status(400).json({
                success: false,
                message: `Please enter the following fields: ${missingterm.join(", ")}`
            });
        }


        const newData = new Donor({
            userid: userid,
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
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getDonorByUserId = async (req, res) => {
    try {
        const { userid } = req.params;

        const record = await Donor.findOne({ userid: userid });

        (record) ? res.status(200).json({ success: true, data: record, message: "Data Get" }) : res.status(400).json({ success: false, message: "Data Not Found" })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}



export {
    getHome, postDonors, getDonors, getDonorByUserId
}