import User from "../Schema/UserSchema.js";
import  bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken' ;

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

export const UserLogin = async(req,res) => {
    try {

        const {username,password} = req.body;
        
        if(!username || !password){
            return res.status(404).json({
                message : "Enter All Fields"
            })
        }
        
        const user = await User.findOne({username});
        console.log('find user= ',user);

        if(!user){
            return res.status(400).json({
                message : " User not Existed "
            })
        }

        const matchpass = await bcrypt.compare(password,user.password);
        console.log('matched pass=',matchpass);

         if(!matchpass){
            return res.status(401).json({
                message : "Password Incorrect"
            })
         }

        // create token
        const token =  jwt.sign({_id : user._id},process.env.JWT_SECRET);
        console.log('token created=',token);

        // store in cookies
         res.cookie('token'  , token , {
            httpOnly : false,
            path : '/',
            maxAge : 24 * 60000,
           
         })

        return res.status(200).json({
            message: "Logged In Successful",
            user,
            token
        })

    } catch (error) {
            console.log('logged eror =',error);
    }
}

export const Profile = async(req,res) => {
    try {
        console.log('accesing profile');

    } catch (error) {
        console.log('profileerro =',error);
    }
}
