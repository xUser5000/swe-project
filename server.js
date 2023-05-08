import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import subjectsRouter from "./routes/subjects.js";
const mongoConnectionURL ='mongodb://localhost:21017/project'; 
const app = express();
mongoose.connect(process.env.mongoConnectionURL);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


app.use("/subjects",subjectsRouter);

app.listen(process.env.port,()=>
{


})




;







