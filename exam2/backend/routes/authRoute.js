import express from "express";
import { authCheck, login, logout, signup } from "../controllers/authController.js";
import { secureRoutes } from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", secureRoutes, authCheck);

export default router;