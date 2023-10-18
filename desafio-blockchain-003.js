// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let desconto = parseInt(gets());
let precoSemDesconto = parseInt(gets());


// Calcula o preço com desconto
let precoComDesconto = precoSemDesconto - (precoSemDesconto * (desconto / 100));

// Imprime o preço com desconto
print(precoComDesconto);

