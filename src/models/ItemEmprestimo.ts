export class ItemEmprestimo {
    readonly id?: number;
    readonly idEmprestimo: number;
    readonly idLivro: number;
    dataDevolucao?: Date;

    constructor (idEmprestimo: number, idLivro: number, dataDevolucao?: Date, idItemEmprestimo?: number){
        this.idEmprestimo = idEmprestimo;
        this.idLivro = idLivro;

        if (dataDevolucao !== undefined){
            this.dataDevolucao = dataDevolucao;
        }

        if (idItemEmprestimo !== undefined){
            this.id = idItemEmprestimo;
        }
    }
}