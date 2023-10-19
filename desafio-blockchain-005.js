// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let linhas = gets().split(" ");

// TODO: Atribuir os valores de "A" e "B" a partir do array "linhas".
let a = parseInt(linhas[0]); // Número total de coxinhas consumidas
let b = parseInt(linhas[1]); // Número total de participantes


// TODO: Calcular o total com base nos valores de "A" e "B".
let total = a / b;

print(total.toFixed(2));