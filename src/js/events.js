
//Funcion para abrir perfil
function perfil(){
document.getElementById('options').style.display = 'none';
document.getElementById('seccionPerfil').style.display = 'block';
document.getElementById('seccionSaldo').style.display = 'none';
document.getElementById('accordion').style.display = 'none';
document.getElementById('seccionTarifa').style.display = 'none';
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