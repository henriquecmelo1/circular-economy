import {postForm, getForms, getFormById, updateForm, deleteForm} from "./controller.js";
import { Router } from "express";

const router = Router();

// Rota para criar um novo formulário
router.post('/', postForm);

// Rota para obter todos os formulários
router.get('/', getForms);

// Rota para obter um formulário específico por ID
router.get('/:id', getFormById);

// Rota para atualizar um formulário específico por ID
router.put('/:id', updateForm);

// Rota para deletar um formulário específico por ID
router.delete('/:id', deleteForm);


export default router;