export class Livro {
    readonly id?: number;
    titulo: string;
    quantidadeCadastrada: number;
    quantidadeDisponivel: number;
    idAutor: number;
    idGenero: number;
    idEditora: number;
    anoDeLancamento: number;

    constructor(
        titulo: string,
        quantidadeCadastrada: number,
        idAutor: number,
        idGenero: number,
        idEditora: number,
        anoDeLancamento: number,
        quantidadeDisponivel?: number,
        idLivro?: number
    ){
        this.titulo = titulo;
        this.quantidadeCadastrada = quantidadeCadastrada;
        this.idAutor = idAutor;
        this.idGenero = idGenero;
        this.idEditora = idEditora;
        this.anoDeLancamento = anoDeLancamento;

        if (quantidadeDisponivel !== undefined){
                this.quantidadeDisponivel = quantidadeDisponivel;
        } else {
            this.quantidadeDisponivel = quantidadeCadastrada;
        } 

        if (idLivro !== undefined){
            this.id = idLivro;
        }
    }
}