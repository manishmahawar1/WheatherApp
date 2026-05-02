import express from "express";

import { signup, login, logout, getMe, updateUser } from "../controller/authController.js";

import protectRoute from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.patch("/user", protectRoute, updateUser);

router.post("/logout", logout);

router.get("/me", protectRoute, getMe);

export default router;
