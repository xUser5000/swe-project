import { Router } from "express";
import departmentModel from "../models/department.js";
import subjectModel from "../models/subject.js";

const router = new Router();

router.get("/",(req,res)=>
{
    res.render("subjects/all");
})

export default router;