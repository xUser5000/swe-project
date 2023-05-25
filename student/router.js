import { Router } from "express";
import { listSubjects, registerCourse } from './controller.js';

const studentRouter = new Router();

studentRouter.get("/dashboard", listSubjects);
studentRouter.get("/register_course", (req, res) => res.render("student_register_course"));
studentRouter.post("/api/register_course", registerCourse);

export { studentRouter };
