function esPalindromo(cadena) {
  const cadenaNormalizada = cadena.replace(/[\W_]/g, "").toLowerCase();

  let izquierda = 0;
  let derecha = cadenaNormalizada.length - 1;

  while (izquierda < derecha) {
    if (cadenaNormalizada[izquierda] !== cadenaNormalizada[derecha]) {
      return false;
    }
    izquierda++;
    derecha--;
  }
  return true;
};

console.log(esPalindromo("Ana lava lana"));
console.log(esPalindromo("Amo la pacífica paloma"));