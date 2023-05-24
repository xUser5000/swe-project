import { Router } from "express";
import { listSubjects } from './controller.js';

const professorRouter = new Router();

professorRouter.get("/dashboard", listSubjects);

export { professorRouter };