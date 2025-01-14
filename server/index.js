import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from 'mongoose';

import { getHealth } from './controllers/Health.js';
import { getInvaild } from './controllers/Invalid.js';
import { getHome } from './controllers/DonorCircle.js';
import Donor from './models/Donor.js';

const app = express();

app.use(express.json());
app.use(cors());

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
        console.log('Connected to MongoDB')
    }
}


//health API's
app.get("/health", getHealth)

//App API's
app.get("/", getHome)

app.post("/Donors", async (req, res) => {

    try {
        const { name, mobile, address, bloodGroup } = req.body;

        

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
            message: "Donor data fetch "
        })
    }
    catch(error)
    {
        console.log(error);
    }
    
})

//Invalid API's
app.get("*", getInvaild)


const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    ConnectDB();
})