import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';



const app = express();
const port = process.env.PORT || 4000;


// MIDDLEWARE 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// DB Configuration

connectDB();


// ROUTES

app.get('/', (req, res) => {
    res.send('API WORKING');
});


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});







