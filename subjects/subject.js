import { Schema, model } from "mongoose";

const SubjectSchema = new Schema({
    name: String,
    code: String,
    department: String,
    professor: String,
    prerequisites: [String],
}, {timestamps:true});

const Subject = model('subject', SubjectSchema);

export { Subject };
