import { Router } from "express";
import { loginUser, registerUser, refreshToken } from "../controllers/auth";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/token/:id", refreshToken);

export default router;
