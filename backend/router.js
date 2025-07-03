import {postForm, getForms} from "./controller.js";
import { Router } from "express";

const router = Router();

// Rota para criar um novo formulário
router.post('/', postForm);

// Rota para obter todos os formulários
router.get('/', getForms);


export default router;