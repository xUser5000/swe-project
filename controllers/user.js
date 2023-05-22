import user from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerForm = (req,res)=>{
    res.render('authentication/register');

}

export const register = async(req , res)=>{
    const {username , email , password} =req.body;
     const salt = bcrypt.genSaltSync(10);
     const encryptedPasswrd = bcrypt.hashSync(password,salt);
     //console.log(encryptedPasswrd);
    await user.create({username , email , password:encryptedPasswrd});
    res.redirect('/login');
}

export const loginForm = (req,res)=>{
    res.render('authentication/login');
}


export const login =async (req , res)=>{
    const {email , password} =req.body;
    const loggedUser = await user.findOne({email})
    const isCorrectPassword = bcrypt.compareSync(password,loggedUser.password); 

    if(!isCorrectPassword){
        return res.send("Incorrect credintials");
    }


    const data ={
        _id: loggedUser._id,
        email: loggedUser.email,
    };
    const jwtToken = jwt.sign(data,process.env.JWT_SECRET);
    console.log(jwtToken); 
    
   res.cookie('token' , jwtToken);
    res.send('logged in');
};