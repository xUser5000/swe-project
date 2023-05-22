import  express  from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import subjectsRouter from './routes/subjects.js';
import authRoutes from'./routes/auth.js';
import {authentication} from './middleware/authentication.js';


const app =  express();
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates'); 
app.use('/' , authRoutes);
app.use('/subjects' , authentication ,subjectsRouter)



app.listen(process.env.port , () => {
    
    console.log(`started the application on http://localhost:${process.env.port}`);
    
    mongoose.connect(process.env.mongoConnectionUrl).then(()=> {
        console.log('connected to mongo db');
    }).catch((err)=> {
        console.log('error connecting to mongo db');
        console.log(err);
    });
});