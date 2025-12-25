import Project from "../models/Project.model";
import { Request, Response } from "express";

interface AuthRequest extends Request {
  user?: {
    id: string;
    college: string;
  };
}
export const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, type, skillsRequired, teamSize } = req.body;
    if (!title || !description || !type || !skillsRequired || !teamSize) {
      return res.status(400).json({ message: "All Fields are required!" });
    }
    const project = await Project.create({
      title,
      description,
      type,
      skillsRequired,
      teamSize,
      ownerId: req.user?.id,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const { type } = req.query;
    const filter: any = {};
    if (type) {
      filter.type = type;
    }
    const projects = await Project.find(filter)
      .populate("ownerId", "name college")
      .sort({ createdAt: -1 });
   return res.status(200).json(projects);
  } catch (error) {
   return res.status(500).json({ message: "Error fetching projects", error });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const project = await Project.findById(id).populate("ownerId", "name email college");
        if(!project) {
            return res.status(404).json({message: "Project not found"});
        }
       return res.status(200).json(project);
    } catch (error) {
        return res.status(500).json({message: "Error fetching project details", error});
    };
};

export const getMyProjects = async (req: AuthRequest, res: Response) => {
    try {
        const projects = await Project.find({ownerId: req.user?.id})
            .populate("ownerId", "name college")
            .sort({createdAt: -1});
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({message: "Error fetching your projects", error});
    };
};

