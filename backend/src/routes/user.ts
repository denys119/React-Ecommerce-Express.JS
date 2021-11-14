import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  updateAdmin,
  updateUserProfile,
  getUser,
} from "../controllers/user";

const router = Router();
router.get("/users/:id", getAllUsers);
router.get("/users/findUser/:id", getUser);
router.put("/updateAdminUsers/:id", updateAdmin);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUserProfile);
export default router;
