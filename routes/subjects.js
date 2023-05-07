import { Router } from "express";
import department from "../models/department.js";
import subject from "../models/subject.js";
import { create, index, show, store } from "../controllers/subject.js";

const router = new Router();

router.get('/' , index);
router.get('/create' , create);
router.post('/' , store);
router.get('/:id' , show);
export default router;

