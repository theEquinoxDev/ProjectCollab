import express from "express";
import {
  sendRequest,
  getProjectRequests,
  updateRequestStatus,
  getMySentRequests
} from "../controllers/request.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/project/:projectId", protect, sendRequest);

router.get("/project/:projectId", protect, getProjectRequests);

router.patch("/:requestId", protect, updateRequestStatus);

router.get("/my-requests", protect, getMySentRequests);

export default router;
