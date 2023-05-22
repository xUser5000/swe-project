import department from "../models/department.js";
import subject from "../models/subject.js";
import jwt from 'jsonwebtoken';


export const index =  async(req , res) => {
    console.log(req.user);
    
    const subjects = await subject.find({doctor: req.user._id} , {name: 1}).lean();
    //console.log(subjects);
    res.render('subjects/index' , { subjects });
   
}    


export const create = async(req , res) => {
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/create' , {departments})
}

export const store =  async(req , res) => {
    console.log(req.body);

    const {name , code , department } = req.body;
    console.log(name);

     await subject.create({
        name,
        code,
        department,
        doctor:req.user._id,
        
    });
    res.redirect('/subjects');
    //res.send("Subject was added")
};

export const edit = async(req , res) => {
    const{id} = req.params;
    const editFormSubject = await subject.findById(id).lean();
    const departments = await department.find().lean();
    console.log(departments);
    res.render('subjects/edit', {departments, subject: editFormSubject});

}
export const update =async(req , res) => {
    console.log(req.body);

    const {name , code , department } = req.body;
    console.log(name);

    const{id} = req.params;
    await subject.findByIdAndUpdate(id ,{ 
        $set:{name , code , department}},
        );

    res.redirect('/subjects');
    //res.send("Subject was added")
};

export const show = async(req , res )=> {
//1-grab the _id
const {id }= req.params;

//2-use the id to get the subject from db
const singleSubject = await subject.findById(id).populate('department').lean();
console.log(singleSubject);
//3-render show template
res.render('subjects/show' , {subject: singleSubject});

};

export const deleteOne = async(req , res)=>{
    const{id} = req.params;
    await subject.findByIdAndDelete(id);
    return res.redirect('/subjects');
}