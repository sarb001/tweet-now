import jwt from "jsonwebtoken";
import User from "../Schema/UserSchema.js";


export const AuthMiddleware = async(req,res,next) => {
    try {
        const   token =  req.cookies?.token || req.header("Authorization")?.replace("Bearer","");
    
        console.log('cookiess token- ',token);

        if(!token){
            return res.status(401).json({ message : "Token not Found "})
        }

        const decoded =  jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decoded._id);
        console.log('user');

        req.user = user;
        next();

    } catch (error) {
             return console.log('auth token =',error);
    }
}