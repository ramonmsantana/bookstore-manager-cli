export class Emprestimo {
    readonly id?: number;
    readonly idCliente: number;
    readonly dataRetirada: Date;
    readonly dataPrevistaDevolucao: Date;

    constructor(idCliente: number, dataRetirada: Date, dataPrevistaDevolucao: Date, idEmprestimo?: number){
        this.idCliente = idCliente;
        this.dataRetirada = dataRetirada;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;

        if (idEmprestimo !== undefined){
            this.id = idEmprestimo;
        }
    }
}