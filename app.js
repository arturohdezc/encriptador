// Obtener referencias a los elementos
let textoUsuario = document.getElementById('textoUsuario');
let textoResultado = document.getElementById('textoResultado');
let desaparecerTexto = document.getElementById('desaparecerTexto');
let desaparecerMunieco = document.getElementById('desaparecerMunieco');

/* Función para encriptar el texto */
let encriptar = () => {
  if (validarTexto()) { // Verifica si el texto ingresado es válido
    let texto = textoUsuario.value;
    let textoEncriptado = '';
    // Iterar sobre cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
      // Reemplazar las vocales por su versión encriptada
      switch (texto[i]) {
        case 'e':
          textoEncriptado += 'enter';
          break;
        case 'i':
          textoEncriptado += 'imes';
          break;
        case 'a':
          textoEncriptado += 'ai';
          break;
        case 'o':
          textoEncriptado += 'ober';
          break;
        case 'u':
          textoEncriptado += 'ufat';
          break;
        default:
          textoEncriptado += texto[i]; // Dejar el carácter sin cambios si no es una vocal a encriptar
      }
    }
    textoResultado.value = textoEncriptado; // Mostrar el texto encriptado en el campo de resultado
    resultado(); // Llamar a la función para actualizar la visualización
  }
};

/* Validación para permitir solo letras en minúsculas y sin acentos */
let validarTexto = () => {
  let expresionRegular = /^[a-z\s]*$/; // Expresión regular para letras minúsculas y espacios
  if (textoUsuario.value.trim() !== "") { // Verificar que el campo no esté vacío
    if (!expresionRegular.test(textoUsuario.value)) { // Verificar que el texto cumpla con la expresión regular
      alert('El programa sólo acepta minúsculas sin acentos'); // Mostrar mensaje de error
      return false;
    }
    return true; // El texto es válido
  } else {
    alert('Ingresa un texto a codificar'); // Mostrar mensaje de error si el campo está vacío
    return false;
  }
};

/* Función para desencriptar el texto */
let desencriptar = () => {
  if (validarTexto()) { // Verifica si el texto ingresado es válido
    let texto = textoUsuario.value;
    let textoDesencriptado = '';
    // Iterar sobre cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
      // Reemplazar las secuencias encriptadas por las vocales originales
      if (texto.slice(i, i + 5) === 'enter') {
        textoDesencriptado += 'e';
        i += 4;
      } else if (texto.slice(i, i + 4) === 'imes') {
        textoDesencriptado += 'i';
        i += 3;
      } else if (texto.slice(i, i + 2) === 'ai') {
        textoDesencriptado += 'a';
        i += 1;
      } else if (texto.slice(i, i + 4) === 'ober') {
        textoDesencriptado += 'o';
        i += 3;
      } else if (texto.slice(i, i + 4) === 'ufat') {
        textoDesencriptado += 'u';
        i += 3;
      } else {
        textoDesencriptado += texto[i]; // Dejar el carácter sin cambios si no es una secuencia encriptada
      }
    }
    textoResultado.value = textoDesencriptado; // Mostrar el texto desencriptado en el campo de resultado
    resultado(); // Llamar a la función para actualizar la visualización
  }
};

/* Función para modificar la propiedad display de imágenes y textos */
let resultado = () => {
  desaparecerMunieco.style.display = 'none'; // Ocultar la imagen del muñeco
  desaparecerTexto.style.display = 'none'; // Ocultar el texto que debe desaparecer
  textoResultado.style.display = 'block'; // Mostrar el campo de resultado
};
