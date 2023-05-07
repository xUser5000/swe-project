import express from 'express'
const arr = express();
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
mongoose.connect(process.env.url);
import subject from "./routes/subject.js"
app.use(express.urlencoded({extended : true}))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use("/subject",subject);
app.get("/students",(req,res) =>{
    res.render("department/all")
})
app.listen(process.env.port,() => {
console.log("Application lunched correctly at Port "+process.env.PORT);
}
);



