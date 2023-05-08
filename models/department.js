import { Schema,model } from "mongoose";
const department = new Schema({

name:{
    type:String,
    required:true,

},
code:{
    type:String,
    required:false,
}


},{timestamps:true})

const departmentModel = model("department",department)
export default departmentModel;