import { Schema, model } from "mongoose";
const DepartmentSchema = new Schema({
    name: String,
    code: String                                                                                                         
},{timestamps:true});

const Department = model('department' , DepartmentSchema);

export { Department };