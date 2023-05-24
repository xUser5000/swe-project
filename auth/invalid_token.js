import { Schema, model } from "mongoose";

const InvalidTokenSchema = new Schema({
    content: String
}, {timestamps:true});

const InvalidToken = model('invalid_token', InvalidTokenSchema);

export { InvalidToken };
