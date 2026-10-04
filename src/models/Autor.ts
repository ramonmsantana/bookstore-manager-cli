export class Autor {
    readonly id?: number;
    nomeAutor: string;

    constructor(nomeAutor: string, idAutor?: number){
        this.nomeAutor = nomeAutor;
        if (idAutor !== undefined){
            this.id = idAutor;
        }
    }
}

