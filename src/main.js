import { livros, usuarios, emprestimos } from "./data/dadosIniciais.js";

console.log("===== SISTEMA DE GERENCIAMENTO DE BIBLIOTECA =====");

console.log("\n===== LIVROS CADASTRADOS =====");

livros.forEach((livro) => {
  console.log({id: livro.getId(), titulo: livro.getNome(), autor: livro.getAutor(), categoria: livro.getCategoria()});
});

console.log("\n===== USUÁRIOS CADASTRADOS =====");

usuarios.forEach((usuario) => {
  console.log({id: usuario.getId(), nome: usuario.getNome(), matricula: usuario.getMatricula()});
});

console.log("\n===== EMPRÉSTIMOS CADASTRADOS =====");

emprestimos.forEach((emprestimo) => {
  console.log({
    id: emprestimo.getId(),
    livro: emprestimo.getLivro().getNome(),
    usuario: emprestimo.getUsuario().getNome(),
    dataEmprestimo: emprestimo.getDataEmprestimo().toLocaleDateString("pt-BR"),
    dataPrevistaDevolucao: emprestimo.getDataPrevistaDevolucao().toLocaleDateString("pt-BR"),
    dataEfetivaDevolucao: emprestimo.getDataEfetivaDevolucao()
  });
});