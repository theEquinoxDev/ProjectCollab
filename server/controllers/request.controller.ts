import { Request, Response } from "express";
import Project from "../models/Project.model";
import JoinRequest from "../models/JoinRequest.model";

interface AuthRequest extends Request {
    user?: { id: string };
}

export const sendRequest = async (req: AuthRequest, res: Response) => {
    try {
        const { projectId } = req.params;
        const { message } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.ownerId.toString() === req.user.id) {
            return res.status(400).json({ message: "You cannot join your own project" });
        }

        const already = await JoinRequest.findOne({
            userId: req.user.id,
            projectId
        });

        if (already) {
            return res.status(400).json({ message: "You have already sent request for this project" });
        }

        const request = await JoinRequest.create({
            userId: req.user.id,
            projectId,
            message
        });

        return res.status(201).json(request);

    } catch (err) {
        return res.status(500).json({ message: "Internal Error" });
    }
};

export const getProjectRequests = async (req: AuthRequest, res: Response) => {
    try {
        const { projectId } = req.params;

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.ownerId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not allowed" });
        }

        const requests = await JoinRequest.find({ projectId })
            .populate("userId", "name email college githubLink whatsappNumber skills year");

        return res.status(200).json(requests);

    } catch (err) {
        return res.status(500).json({ message: "Internal Error" });
    }
};

export const updateRequestStatus = async (req: AuthRequest, res: Response) => {
    try {
        const { requestId } = req.params;
        const { status } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!["accepted", "rejected"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const joinRequest = await JoinRequest.findById(requestId);
        if (!joinRequest) {
            return res.status(404).json({ message: "Join request not found" });
        }

        const project = await Project.findById(joinRequest.projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.ownerId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not allowed" });
        }

        joinRequest.status = status;
        await joinRequest.save();

        return res.status(200).json(joinRequest);

    } catch (err) {
        return res.status(500).json({ message: "Internal Error" });
    }
};

export const getMySentRequests = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) return res.status(401).json({ message: "Unauthorized" });

        const requests = await JoinRequest.find({ userId: req.user.id })
            .populate("projectId", "title description ownerId status") 
            .sort({ createdAt: -1 });

        return res.status(200).json(requests);
    } catch (err) {
        return res.status(500).json({ message: "Internal Error" });
    }
};
