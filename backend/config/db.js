import mongoose from "mongoose";



export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://olivjr:taskflow25@cluster0.no1zgac.mongodb.net/Taskflow25',)
        .then(() => console.log('DB CONNECTED'));


} 