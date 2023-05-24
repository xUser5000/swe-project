import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    type: String,
    academic_number: Number
}, {timestamps:true});

const User = model('user', UserSchema);

export { User };
