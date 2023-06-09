import { Router } from "express";
import { login, logout, register } from "./controller.js";

const authRouter = new Router();

authRouter.get('/login', (req, res) => res.render("login"));
authRouter.get('/register', (req, res) => res.render("register"));

authRouter.post('/api/login', login);
authRouter.post('/api/register', register);
authRouter.post("/api/logout", logout);

export { authRouter };
