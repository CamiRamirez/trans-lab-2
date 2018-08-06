

// Funcion para validar email
window.validateEmail = (email) => {
  if (email.indexOf('@') < 0) {
    return false;
  }
  const tokens = email.split('@');
  if (tokens.length != 2) {
    return false;
  }
  const domTokens = tokens[1].split('.');
  if (domTokens.length != 2) {
    return false;
  }
  if (domTokens[0].length < 1) {
    return false;
  }
  if (domTokens[1].length < 1) {
    return false;
  }
  return true;
};


//Funcion para validar contraseña

window.validatePass = (pass) => {
  console.log(pass)
  if (pass.toString().length <= 8) { //se comprueba el largo, maximo 8 
    if (isNaN(pass) == false) { // se comprueba que sean numeros
      if (!pass.trim() == " ") {  //se comprueba que no contenga espacios
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}


//Validacion para entrar con login
window.validateLogin = () => { 
  const email = document.getElementById('inputEmail').value;
  const pass = document.getElementById('inputPassword').value;
  window.validateEmail(email);
  window.validatePass(pass);
  enter();
}


// Funcion para validar tarjeta
window.validateCard = (bip) => {
  if (bip.toString().length <= 10) {
    if (isNaN(bip) == false) {
      if (!bip.toString().trim() == " ") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}