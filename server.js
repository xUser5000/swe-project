import  express  from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { authRouter } from'./auth/router.js';


const app =  express();
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', ['./auth/templates']); 

app.get('/', (req, res) => res.redirect('/auth/login'));
app.use('/auth' , authRouter);


app.listen(process.env.port , () => {
    
    console.log(`started the application on http://localhost:${process.env.port}`);
    
    mongoose.connect(process.env.mongoConnectionUrl).then(()=> {
        console.log('connected to mongo db');
    }).catch((err)=> {
        console.log('error connecting to mongo db');
        console.log(err);
    });
});