import { Schema, model } from "mongoose";

const StudentSubjectSchema = new Schema({
    student_id: String,
    course_id: String,
}, {timestamps:true});

const StudentSubject = model('student_subject', StudentSubjectSchema);

export { StudentSubject };
