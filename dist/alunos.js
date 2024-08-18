"use strict";

var alunos = [{
  nome: 'Gustavo',
  nota: 8
}, {
  nome: 'Julia',
  nota: 5
}, {
  nome: 'Paula',
  nota: 9
}, {
  nome: 'Wagner',
  nota: 4
}];
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
alunosAprovados.forEach(function (aluno, indice) {
  console.log("#".concat(indice, " Aluno aprovado: ").concat(aluno.nome, " - Nota: ").concat(aluno.nota));
});
var alunoEspecifico = alunos.find(function (aluno) {
  return aluno.nome === 'Paula';
});
console.log(alunoEspecifico);
var indiceDeUmAluno = alunos.findIndex(function (aluno) {
  return aluno.nome === 'Julia';
});
console.log(indiceDeUmAluno);
var todosAlunosAprovados = alunos.every(function (aluno) {
  return aluno.nota >= 6;
});
console.log(todosAlunosAprovados);
var algumAlunoReprovado = alunos.some(function (aluno) {
  return aluno.nota < 6;
});
console.log(algumAlunoReprovado);
var alunosReprovados = alunos.filter(function (aluno) {
  return aluno.nota < 6;
});
console.log(alunosReprovados);
var somaDasNotas = alunos.reduce(function (acumulador, aluno) {
  acumulador += aluno.nota;
  return acumulador;
}, 0);
console.log(somaDasNotas);
var nomesDosAlunos = alunos.reduce(function (acumulador, aluno) {
  acumulador += "".concat(aluno.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);