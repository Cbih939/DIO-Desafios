// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const total = parseInt(gets());

// TODO: Implemente o calculo das variáveis "horas" e "segundos":
const horas = Math.trunc(total / 3600);
const minutos = Math.trunc((total % 3600) / 60);
const segundos = total % 60;

// Impressão do resultado usando interpolação de strings.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
print(`${horas}:${minutos}:${segundos}`);