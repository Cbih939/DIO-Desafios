// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let T = parseInt(gets());

// Loop através dos casos de teste
for (let i = 0; i < T; i++) {
    // Lê a cadeia de caracteres para cada caso de teste
    let vilao = gets();
    
    // Imprime 'Y' para indicar que o vilão já foi capturado pelo Batmain
    print('Y');
}
