export class Usuario {
  #id;
  #nome;
  #matricula;

  constructor(id, nome, matricula) {
    if(!id || !nome || !matricula) {
      throw new Error("todos os campos são obrigatórios");
    }

    this.#id = id;
    this.#id = nome;
    this.#matricula = matricula;
  }

  getId() { return this.#id; }
  getNome() { return this.#nome; }
  getMatricula() { return this.#matricula; }
  
}