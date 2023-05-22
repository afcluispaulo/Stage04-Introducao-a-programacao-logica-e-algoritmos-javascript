/*
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

// VARIÁVEIS
let alunos = []
let notas1 = []
let notas2 = []

// FUNÇÕES
function calcularMedia(aluno, nota1, nota2) {
    this.aluno = aluno
    this.nota1 = nota1
    this.nota2 = nota2

    parseFloat(resultado = (this.nota1 + this.nota2) / 2)
    if (resultado >= 7) {
        alert(`A média de ${aluno} foi: ${resultado}. Resultado: APROVADO `)
    } else {
        alert(`A média de ${aluno} foi: ${resultado}. Resultado: REPROVADO `)
    }
}

let quantidade = prompt("Deseja cadastrar quantos alunos?")

// ENTRADA DE DADOS
for ( let c = 0; c < quantidade; c++ ) {
    let aluno = prompt("Digite o primeiro nome: ")
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))

    alunos[c] = aluno
    notas1[c] = nota1
    notas2[c] = nota2

    // TESTE DE VARIÁVEIS NO CONSOLE
    console.log(alunos[c])
    console.log(notas1[c])
    console.log(notas2[c])
}

// RESULTADO
for ( let c = 0; c < quantidade; c++ ) {
    let calculo = []
    calculo[c] = new calcularMedia(alunos[c], notas1[c], notas2[c])
    
}
