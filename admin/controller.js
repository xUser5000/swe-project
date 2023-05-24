import { Department } from '../departments/department.js'
import { Subject } from '../subjects/subject.js'
import { User } from '../auth/user.js'

export const addDepartment = async (req, res) => {
    await Department.create(req.body);
    res.redirect('/admin/departments');
}

export const listDepartments = async (req, res) => {
    const departments = await Department.find().lean();
    res.render("admin_departments", { departments });
}

export const addSubject = async (req, res) => {
    const sub = await Subject.create(req.body);
    res.redirect('/admin/courses');
}

export const listSubjects = async (req, res) => {
    const subjects = await Subject.find().lean();
    res.render("admin_courses", { subjects });
}

export const addProfessor = async(req, res) => {
    await User.create({...req.body, type: "professor"});
    res.redirect('/admin/professors');
}

export const listProfessors = async (req, res) => {
    const professors = await User.find({ type: "professor" }).lean();
    res.render("admin_professors", { professors });
}

export const addStudent = async (req, res) => {
    await User.create({...req.body, type: "student"});
    res.redirect('/admin/students');
}

export const listStudents = async (req, res) => {
    const students = await User.find({ type: "student" }).lean();
    res.render("admin_students", { students });
}
