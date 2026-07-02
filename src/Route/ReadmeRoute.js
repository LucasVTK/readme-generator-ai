import { Router } from "express";
import ReadmeController from "../controllers/gerarReadme.js";

const ReadmeRoute = Router()
//configuracoes de rota
ReadmeRoute.post('/api/gerar', ReadmeController.gerarReadme)

export default ReadmeRoute