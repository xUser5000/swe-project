import { Schema,model } from "mongoose";
const subject = new Schema({

name:{
    type:String,
    required:true,

},
code:{
    type:String,
    required:false,
}


},{timestamps:true})

const subjectModel = model("subject",subject)
export default subjectModel;