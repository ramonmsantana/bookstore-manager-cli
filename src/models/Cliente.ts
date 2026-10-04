export class Cliente {
    readonly id?: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    idCidade:  number;
    telefone?: string;
    email?: string;
    dataCadastro?: Date;

    constructor (
        nome: string,
        cpf: string,
        dataNascimento: Date,
        idCidade: number,
        telefone?: string,
        email?: string,
        dataCadastro?: Date,
        idCliente?: number
    ){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.idCidade = idCidade;

        if (telefone !== undefined){
            this.telefone = telefone;
        }

        if (email !== undefined){
            this.email = email;
        }

        if (dataCadastro !== undefined){
            this.dataCadastro = dataCadastro;
        }
        if (idCliente !== undefined){
            this.id = idCliente;
        }
    }

}