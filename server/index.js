import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from 'mongoose';

import { getHealth } from './controllers/Health.js';
import { getInvaild } from './controllers/Invalid.js';
import { getHome, postDonors,getDonors } from './controllers/DonorCircle.js';
import Donor from './models/Donor.js';


const app = express();

app.use(express.json());
app.use(cors());

//connection to mongodb
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

app.get("/Donors", getDonors)

app.post("/Donors", postDonors)

//Invalid API's
app.get("*", getInvaild)


const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    ConnectDB();
})