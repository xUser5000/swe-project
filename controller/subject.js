import subject from "../models/subject.js";
import department from "../models/department.js"
export const index = async (req , res) => {
    const subjects = await subject.find({},{name :1}).lean();
    
    res.render('subjects/index',{subjects})
}
export const create =async (req,res) => {
    const departments =await department.find().lean();
    console.log(departments);
    res.render("subjects/create",{departments})
}
export const store = (req,res) => {
    console.log(req.body)
}
