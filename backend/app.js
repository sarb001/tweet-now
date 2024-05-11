import express from 'express';
import { connectDb } from './Database/Db.js';
import dotenv from 'dotenv' ;
import user from './Routes/UserRoute.js';

const app = express();

dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1' ,user);


app.listen(4000 , () => {
    console.log('Server is running on PORT ....');
})