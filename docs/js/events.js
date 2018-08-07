
//Funcion para abrir perfil
function perfil(){
document.getElementById('options').style.display = 'none';
document.getElementById('seccionPerfil').style.display = 'block';
document.getElementById('seccionSaldo').style.display = 'none';
document.getElementById('seccionTarifa').style.display = 'none';
document.getElementById('seccionPreguntas').style.display = 'none';
showMail()
};


//Funcion para abrir Saldo
function saldo(){
  document.getElementById('options').style.display = 'none';
  document.getElementById('seccionPerfil').style.display = 'none';
  document.getElementById('seccionSaldo').style.display = 'block';
  document.getElementById('seccionPreguntas').style.display = 'none';
  document.getElementById('seccionTarifa').style.display = 'none';
};

//funcion para volver a pantalla inicial
  function home(){
    document.getElementById('options').style.display = 'block';
    document.getElementById('seccionPerfil').style.display = 'none';
    document.getElementById('seccionSaldo').style.display = 'none';
    document.getElementById('seccionPreguntas').style.display = 'none';
    document.getElementById('seccionTarifa').style.display = 'none';
  }

  function questions(){
    document.getElementById('options').style.display = 'none';
    document.getElementById('seccionPerfil').style.display = 'none';
    document.getElementById('seccionSaldo').style.display = 'none';
    document.getElementById('seccionPreguntas').style.display = 'block';
    document.getElementById('seccionTarifa').style.display = 'none';
  }

  function tarifa(){
    document.getElementById('options').style.display = 'none';
    document.getElementById('seccionPerfil').style.display = 'none';
    document.getElementById('seccionSaldo').style.display = 'none';
    document.getElementById('seccionPreguntas').style.display = 'none';
    document.getElementById('seccionTarifa').style.display = 'block';
  }

  function cerrar(){
    document.getElementById('options').style.display = 'none';
    document.getElementById('seccionPerfil').style.display = 'none';
    document.getElementById('seccionSaldo').style.display = 'none';
    document.getElementById('seccionPreguntas').style.display = 'none';
    document.getElementById('seccionTarifa').style.display = 'none';
    document.getElementById('loginUser').style.display = 'block';
    document.getElementById('menuDesplegable').style.display = 'none';
  }

  
function enter() {
    document.getElementById('loginUser').style.display = 'none';
    document.getElementById('menuDesplegable').style.display = 'block';
    document.getElementById('options').style.display = 'block';
}