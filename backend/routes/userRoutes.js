import express from "express";
import { getCurrentUser, loginUser, registerUser, updateProfile, changePassword } from "../contollers/userController.js";

import authMiddleware from "../middleware/auth.js";

const userRoute = express.Router();



// PUBLICS LINKS


userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);


//PRIVATE LINKS protect also

userRoute.get("/me", authMiddleware, getCurrentUser);
userRoute.put("/profile", authMiddleware, updateProfile);
userRoute.put("/password", authMiddleware, changePassword);


export default userRoute;
