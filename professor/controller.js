import { Subject } from '../subjects/subject.js'
import { User } from '../auth/user.js'


export const listSubjects = async (req, res) => {
    const id = req.user._id;
    const subjects = await Subject.find({ professor: id }).lean();
    res.render("professor_dashboard", { subjects });
}
