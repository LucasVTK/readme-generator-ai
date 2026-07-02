import { Router } from "express";
import ReadmeController from "../controllers/gerarReadme.js";

const ReadmeRoute = Router()

ReadmeRoute.post('/api/gerar', ReadmeController.gerarReadme)

export default ReadmeRoute