import { Router } from "express";
import {
    addDepartment,
    listDepartments,
    addSubject,
    listSubjects,
    addProfessor,
    listProfessors,
    addStudent,
    listStudents
} from './controller.js';

const adminRouter = new Router();

adminRouter.get("/dashboard", (req, res) => res.render("admin_home"));

adminRouter.get("/departments", listDepartments);
adminRouter.get("/add_department", (req, res) => res.render("admin_add_department"));
adminRouter.post("/api/add_department", addDepartment);

adminRouter.get("/courses", listSubjects);
adminRouter.get("/add_course", (req, res) => res.render("admin_add_course"));
adminRouter.post("/api/add_course", addSubject);

adminRouter.get("/professors", listProfessors);
adminRouter.get("/add_professor", (req, res) => res.render("admin_add_professor"));
adminRouter.post("/add_professor", addProfessor);

adminRouter.get("/students", listStudents);
adminRouter.get("/add_student", (req, res) => res.render("admin_add_student"));
adminRouter.post("/add_student", addStudent);

export { adminRouter };