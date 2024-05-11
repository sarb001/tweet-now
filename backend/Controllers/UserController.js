import User from "../Schema/UserSchema.js";
import  bcrypt from 'bcrypt';

export const UserSignup = async(req,res) => {
    try {

        const { username , email , password } = req.body;
        console.log('username | email | password=',username,email,password);

        if(!username || !email || !password){
            return res.status(404).json({
                message : "Enter All Fields"
            })
        }

        const checkusername = await User.findOne({username});

        if(checkusername){
            return res.status(409).status({
                message : "Username Already Existed"
            })
        }

        const hashpass = await bcrypt.hash(password,20);
        console.log('hashpass is =',hashpass);

        const user =  await User.create({
            username: username,
            email : email,
            password : hashpass
        })

        console.log('user created =',user);

         return res.status(201).json({
            message : "User Created Successful",
            user
        })
        
    } catch (error) {
            console.log('user signuperror =',error);
    }
}


export const UserLogin = () => {
   
}