import express from "express";
import {
  getAllProjects,
  getMyProjects,
  getProjectById,
  createProject,
} from "../controllers/project.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/my-projects", protect, getMyProjects);
router.get("/:id", getProjectById);
router.post("/", protect, createProject);

export default router;
