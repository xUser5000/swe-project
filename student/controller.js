import { Subject } from '../subjects/subject.js';
import { StudentSubject } from './students_subjects.js';

export const listSubjects = async (req, res) => {
    const student_id = req.user._id;
    const studentSubjects = await StudentSubject.find({ student_id }).lean();
    const subject_ids = studentSubjects.map(ss => ss.course_id);
    const subjects = await Subject.find({ _id: { $in: subject_ids } }).lean();
    console.log(subjects);
    res.render("professor_dashboard", { subjects });
}

export const registerCourse = async (req, res) => {
    const student_id = req.user._id;
    const { course_id } = req.body;
    const course = Subject.findById(course_id);
    if (!course) res.status(404).send("Course not found");
    await StudentSubject.create({ student_id, course_id });
    res.redirect("/student/dashboard");
};
