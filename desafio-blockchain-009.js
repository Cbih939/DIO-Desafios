const N = parseInt(gets());
const regexPlacaValida = new RegExp("^[A-Z]{3}-[0-9]{4}$");

for (let i = 0; i < N; i++) {
  const placa = gets();
  if (placa.match(regexPlacaValida)) {
    const digito = parseInt(placa.charAt(placa.length - 1));
    const diaSemana = getDiaSemana(digito);
    print(diaSemana);
  } else {
    print("FALHA");
  }
}

function getDiaSemana(digito) {
  if (digito === 1 || digito === 2) {
    return "SEGUNDA";
  } else if (digito === 3 || digito === 4) {
    return "TERCA";
  } else if (digito === 5 || digito === 6) {
    return "QUARTA";
  } else if (digito === 7 || digito === 8) {
    return "QUINTA";
  } else if (digito === 9 || digito === 0) {
    return "SEXTA";
  }
}
