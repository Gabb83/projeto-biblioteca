import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class Emprestimo {
  #id;
  #livro;
  #usuario;
  #dataEmprestimo;
  #dataPrevistaDevolucao;
  #dataEfetivaDevolucao;
  
  constructor(id, livro, usuario, dataEmprestimo, dataPrevistaDevolucao) {
    if(!id) {
      throw new Error("O identificador do empréstimo é obrigatório.");
    }

    if(!(livro instanceof Livro)) {
      throw new Error("O empréstimo deve estar associado a um livro.");
    }
    
    this.#id = id;
    this.#livro = livro;
    this.#usuario = usuario;
    this.#dataEmprestimo = dataInicial;
    this.#dataPrevistaDevolucao = dataPrevista;
    this.#dataEfetivaDevolucao = null;
  }

  getId() { return this.#id; }
  getLivro() { return this.#livro; }
  getUsuario() { return this.#usuario; }

  obterDados() {
    return {
      id: this.#id,
      livro: this.#livro.obterDados(),
      usuario: this.#usuario.obterDados(),
      dataEmprestimo: this.#dataEmprestimo,
      dataPrevistaDevolucao: this.#dataPrevistaDevolucao,
      dataEfetivaDevolucao: this.#dataEfetivaDevolucao,
      estaAtivo: this.estaAtivo
    };
  }
}