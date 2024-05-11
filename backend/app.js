import express from 'express';
import { connectDb } from './Database/Db.js';
import dotenv from 'dotenv' ;

const app = express();

dotenv.config();
connectDb();

app.listen(4000 , () => {
    console.log('Server is running on PORT ....');
})