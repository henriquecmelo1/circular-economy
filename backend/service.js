import { sql } from './db.js';



export async function create(formulario) {
    const { nome, email, mensagem } = formulario;
    const result = await sql`
            INSERT INTO formularios (nome, email, mensagem)
            VALUES (${nome}, ${email}, ${mensagem})
            RETURNING id
        `;
    return result[0].id;
}

export async function getAll() {
    return await sql`SELECT * FROM formularios`;
}

export async function getById(id) {
    const result = await sql`SELECT * FROM formularios WHERE id = ${id}`;
    return result[0];
}

export async function update(formulario) {
    const { id, nome, email, mensagem } = formulario;
    await sql`
            UPDATE formularios
            SET nome = ${nome}, email = ${email}, mensagem = ${mensagem}
            WHERE id = ${id}
        `;
}

export async function remove (id) {
    await sql`DELETE FROM formularios WHERE id = ${id}`;
}



export default {create, getAll, getById, update, remove};