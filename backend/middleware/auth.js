import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';


export default async function authMiddleware(req, res, next) {
    //GRAB THE TOKEN FROM THE HEADER

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.statu(401).json({ sucess: false, message: 'No Authorization , token missin' });
    }


    const token = authHeader.split(' ')[1];
    //VERIFY & ATTACH USER OBJECT TO REQUEST

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(payload.id).select('-password');

        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        res.user = user;
        next();

    } catch (err) {
        console.log("JWT verification failed", err);
        return res.status(401).json({ success: false, message: 'Token verification failed' });
    }



}