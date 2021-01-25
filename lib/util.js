export function valida(expresión, mensaje) {
  if (!expresión) {
    throw new Error(mensaje);
  }
}

export function trims(s) {
  return s ? s.trim() : "";
}

export function paraTodos(usaForEach, función) {
  const arr = [];
  usaForEach.forEach(doc => arr.push(función(doc)));
  return arr;
}

export function muestraError(error) {
  console.error(error);
  alert(error.message);
}

export function cod(texto) {
  return (texto || "").toString()
    .replace(/[<>"']/g,
      letra => {
        switch (letra) {
          case "<": return "&lt;";
          case ">": return "&gt;";
          case '"': return "&quot;";
          case "'": return "&#039;";
          default: return letra;
        }
      });
}
