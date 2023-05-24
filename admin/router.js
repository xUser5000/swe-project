import { Router } from "express";

const adminRouter = new Router();

adminRouter.get("/dashboard", (req, res) => res.render("admin_home"));

adminRouter.get("/departments", (req, res) => res.render("admin_departments"));
adminRouter.get("/add_department", (req, res) => res.render("admin_add_department"));

adminRouter.get("/courses", (req, res) => res.render("admin_courses"));
adminRouter.get("/add_course", (req, res) => res.render("admin_add_course"));

adminRouter.get("/professors", (req, res) => res.render("admin_professors"));
adminRouter.get("/add_professor", (req, res) => res.render("admin_add_professor"));

adminRouter.get("/students", (req, res) => res.render("admin_students"));
adminRouter.get("/add_student", (req, res) => res.render("admin_add_student"));

export { adminRouter };