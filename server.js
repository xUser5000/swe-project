import  express  from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import subjectsRouter from './routes/subjects.js';


const app =  express();
app.use(express.urlencoded({extended:true}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates'); 

app.use('/subjects' , subjectsRouter)

app.listen(process.env.port , () => {
    
    console.log(`started the application on http://localhost:${process.env.port}`);
    
    mongoose.connect(process.env.mongoConnectionUrl).then(()=> {
        console.log('connected to mongo db');
    }).catch((err)=> {
        console.log('error connecting to mongo db');
        console.log(err);
    });
});