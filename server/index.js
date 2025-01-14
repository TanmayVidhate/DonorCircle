import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const PORT = process.env.PORT || 5003;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(()=>{
    console.log(`http://localhost:${PORT}`);

})