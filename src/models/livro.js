export class Livro {
  #id;
  #titulo;
  #autor;
  #categoria;
  
  constructor(id, titulo, autor, categoria) {
    if(!id || !titulo || !autor || !categoria) {
      throw new Error("todos os campos são obrigatórios");
    }

    this.#id = id;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#categoria = categoria;
  }

  getId() { return this.#id; }
  getNome() { return this.#titulo; }
  getAutor() { return this.#autor; }
  getCategoria() { return this.#categoria; }
}