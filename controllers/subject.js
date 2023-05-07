import department from "../models/department.js";
import subject from "../models/subject.js";


export const index =  async(req , res) => {
    const subjects = await subject.find({} , {name: 1}).lean();
    console.log(subjects);
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
        department
        
    });
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