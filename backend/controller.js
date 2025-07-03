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

export async function getFormById(req, res) {
    const { id } = req.params;
    try {
        const formulario = await getById(id);
        if (!formulario) {
            return res.status(404).json({ error: "Formulário não encontrado" });
        }
        res.status(200).json(formulario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateForm(req, res) {
    const { id } = req.params;
    const { nome, email, mensagem } = req.body;
    try {
        const formulario = new Formulario(nome, email, mensagem, id);
        const updated = await update(formulario);
        if (!updated) {
            return res.status(404).json({ error: "Formulário não encontrado" });
        }
        res.status(200).json({ message: "Formulário atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteForm(req, res) {
    const { id } = req.params;
    try {
        await remove(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export default {postForm, getForms, getFormById, updateForm, deleteForm};