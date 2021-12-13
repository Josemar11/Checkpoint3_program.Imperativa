let curso = require('./curso');

function Aluno(nome, numeroDeFaltas, notas){
    this.nome = nome;
    this.numeroDeFaltas = numeroDeFaltas;
    this.notas = notas;
    this.faltas = function () {
        this.numeroDeFaltas += 1;
    },
    this.operacaoMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
}

let aluno1 = new Aluno('Vander', 3, [7.8, 9, 6]);
let aluno2 = new Aluno('Wilson', 9, [9, 6, 4]);
let aluno3 = new Aluno('Monique', 10, [4, 8, 5]);

curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);
curso.curso.novoEstudante(aluno3);

console.log(curso.curso.listDeAprovacao())
