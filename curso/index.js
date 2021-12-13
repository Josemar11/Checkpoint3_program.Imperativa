module.exports = {
  curso: {
      nomeCurso: 'Curso Programação',
      notaAprovacao: 7,
      faltasMaximas: 10,
      listaEstudantes: [],
      novoEstudante: function (estudante) {
          this.listaEstudantes.push(estudante);
      },
      condicaoDeAprovacao: function (aluno) {
          let media = aluno.operacaoMedia();
          let resultado = false;

          if ((aluno.numeroDeFaltas < this.faltasMaximas && media >= this.notaAprovacao) || 
              (aluno.numeroDeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1))
          ) {
              resultado = true;
          } 

          return resultado;
      },
      listDeAprovacao: function () {
          let verdade = [];
          for (let i = 0; i < this.listaEstudantes.length; i++) {
              verdade.push(this.condicaoDeAprovacao(this.listaEstudantes[i]));
          }

          return verdade;
      }
  }
}

