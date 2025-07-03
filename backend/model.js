export class Formulario{
    constructor(nome, email, mensagem, id=null){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
}