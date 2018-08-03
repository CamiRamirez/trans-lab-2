window.validatePass = function enter() {
  const pass = document.getElementById('inputPassword').value;
  if (pass.length <= 8) {
    document.getElementById('loginUser').style.display = 'none';
    document.getElementById('menuDesplegable').style.display = 'block';
  } else {
    document.getElementById('incorrectPass').innerHTML = 'La contraseña debe contener máximo 8 números.';
  }
}