/*
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

// VARIÁVEIS
let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")

// SOMA
soma = num1 + num2
alert(`O resultado da soma foi: ${soma}`)

// SUBTRACAO
function subtracao(num1, num2) {
    if (num1 <= num2) {
        resultado_subtracao = num2 - num1
    } else {
        resultado_subtracao = num1 - num2
    }
    alert(`O resultado da subtração foi: ${resultado_subtracao}`)
}
subtracao(num1, num2)

// MULTIPLICAÇÃO
multiplicacao = num1 * num2
alert(`O resultado da multiplicação foi: ${multiplicacao}`)

// DIVISÃO
divisao = num1 / num2
alert(`O resultado da divisão foi: ${divisao}`)

// RESTO
resto = num1 % num2
alert(`O resultado do resto foi: ${resto}`)

// VERIFICA PAR OU IMPAR
function par_impar(soma) {
    if (soma % 2 == 0) {
        alert("A soma dos dois valores é par")
    } else {
        alert("A soma dos dois valores é ímpar")
    }
}
par_impar(soma)

// VERIFICA IGUALDADE ENTRE NÚMEROS
function numeros_iguais(num1, num2) {
    if(num1 == num2) {
        alert("Os números são iguais!")
    } else {
        alert("Os números são diferentes!")
    }
}
numeros_iguais(num1, num2)