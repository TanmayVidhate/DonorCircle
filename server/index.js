import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import { getHealth } from './controllers/Health.js';
import { getInvaild } from './controllers/Invalid.js';
import {getHome} from './controllers/DonorCircle.js';

const app = express();

app.use(express.json());
app.use(cors());


//health API's
app.get("/health",getHealth)

//
app.get("/",getHome)


//Invalid API's
app.get("*",getInvaild)


const PORT = process.env.PORT || 5002 

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})