const alunos = [
    { nome: 'Gustavo', nota: 8 },
    { nome: 'Julia', nota: 5 },
    { nome: 'Paula', nota: 9 },
    { nome: 'Wagner', nota: 4 },
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);

alunosAprovados.forEach(function(aluno, indice) {
    console.log(`#${indice} Aluno aprovado: ${aluno.nome} - Nota: ${aluno.nota}`);
});

const alunoEspecifico = alunos.find(function(aluno) {
    return aluno.nome === 'Paula';
});

console.log(alunoEspecifico);

const indiceDeUmAluno = alunos.findIndex(function(aluno) {
    return aluno.nome === 'Julia';
});

console.log(indiceDeUmAluno);

const todosAlunosAprovados = alunos.every(function(aluno) {
    return aluno.nota >= 6;
});

console.log(todosAlunosAprovados);

const algumAlunoReprovado = alunos.some(function(aluno) {
    return aluno.nota < 6;
});

console.log(algumAlunoReprovado);

const alunosReprovados = alunos.filter(function(aluno) {
    return aluno.nota < 6;
});

console.log(alunosReprovados);

const somaDasNotas = alunos.reduce(function(acumulador, aluno) {
    acumulador += aluno.nota;
    return acumulador;
}, 0);

console.log(somaDasNotas);

const nomesDosAlunos = alunos.reduce(function(acumulador, aluno) {
    acumulador += `${aluno.nome} `;
    return acumulador;
}, '');

console.log(nomesDosAlunos);