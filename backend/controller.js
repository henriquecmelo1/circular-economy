import { Formulario } from "./model.js";
import { create, getAll, getById, update, remove } from "./service.js";


export async function postForm(req, res) {
    try {
        const { nome, email, mensagem } = req.body;
        const formulario = new Formulario(nome, email, mensagem);
        const id = await create(formulario);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getForms(req, res) {
    try {
        const formularios = await getAll();
        res.status(200).json(formularios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export default {postForm, getForms}