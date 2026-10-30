import { Livro } from "../models/livro.js";
import { Usuario } from "../models/usuario.js";
import { Emprestimo } from "../models/emprestimo.js";

export const livros = [
  new Livro(1, "Clean Code", "Robert C. Martin", "Programação"),
  new Livro(2, "O Hobbit", "J. R. R. Tolkien", "Fantasia"),
  new Livro(3, "Dom Casmurro", "Machado de Assis", "Literatura"),
  new Livro(4, "JavaScript: O Guia Definitivo", "David Flanagan", "Programação")
];

export const usuarios = [
  new Usuario(1, "João Silva", "20261001"),
  new Usuario(2, "Maria Oliveira", "20261002"),
  new Usuario(3, "Pedro Santos", "20261003")
];

export const emprestimos = [
  new Emprestimo(
    1,
    livros[0],
    usuarios[0],
    new Date("2026-10-20"),
    new Date("2026-10-30")
  ),
  new Emprestimo(
    2,
    livros[1],
    usuarios[1],
    new Date("2026-10-21"),
    new Date("2026-10-31")
  )
];
