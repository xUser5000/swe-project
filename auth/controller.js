import { User } from "./user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerForm = (req,res)=>{
    res.render('authentication/register');
}

export const register = async(req , res)=>{
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPasswrd = bcrypt.hashSync(password,salt);
    await User.create({ username, email, password:encryptedPasswrd, type: "admin"});
    res.redirect('/auth/login');
}

export const login = async (req , res) => {
    const {email , password} = req.body;
    const loggedUser = await User.findOne({email});

    if (!loggedUser) {
        res.status(403).send("Incorrect credintials");
        return;
    }

    const isCorrectPassword = bcrypt.compareSync(password, loggedUser.password);

    if(!isCorrectPassword){
        return res.status(403).send("Incorrect credintials");
    }

    const data = {
        _id: loggedUser._id,
        type: loggedUser.type,
    };
    
    const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
    
    res.cookie('token' , jwtToken);

    if (loggedUser.type === "admin")
        res.redirect("/admin/dashboard");


    if (loggedUser.type === "professor")
        res.redirect("/professor/dashboard");
};

export const logout = async (req , res) => {
    res.cookie('token', null);
    res.redirect("/");
};
