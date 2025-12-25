import express from 'express';
import cors from 'cors';
import {Request, Response} from "express";
import authRoutes from "../routes/auth.routes";
import projectRoutes from "../routes/project.routes";
import requestRoutes from "../routes/request.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/requests", requestRoutes);

export { app };