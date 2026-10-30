export class Emprestimo {
  #id;
  #livro;
  #usuario;
  #dataEmprestimo;
  #dataPrevistaDevolucao;
  #dataEfetivaDevolucao;
  
  constructor(id, livro, usuario, dataEmprestimo, dataPrevistaDevolucao, dataEfetivaDevolucao = null) {
    this.#id = id;
    this.#livro = livro;
    this.#usuario = usuario;
    this.#dataEmprestimo = dataEmprestimo;
    this.#dataPrevistaDevolucao = dataPrevistaDevolucao;
    this.#dataEfetivaDevolucao = dataEfetivaDevolucao;
  }

  getId() { return this.#id; }
  getLivro() { return this.#livro; }
  getUsuario() { return this.#usuario; }
  getDataEmprestimo() { return this.#dataEmprestimo; }
  getDataPrevistaDevolucao() { return this.#dataPrevistaDevolucao; }
  getDataEfetivaDevolucao() { return this.#dataEfetivaDevolucao; }

  registrarDevolucao(data = new Date()) {
    this.#dataEfetivaDevolucao = data;
  }

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