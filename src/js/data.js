//FETCH que me muestra el saldo
function infoBip() {
  let number = document.getElementById('numberCards').value;
  let numberOfOption = document.getElementById('listCards').value;

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${number || numberOfOption}`)
    .then(response => response.json())
    .then(bipJSON => {
      numCard(bipJSON);
    })
    .catch(error => {
      console.error("No pudimos obtener respuesta a su solicitud");
      console.error("ERROR > " + error.stack);
    });
  number.innerHTML = '';
}

// recorriendo api bip y mostrando en pantalla el Saldo
const numCard = (bipJSON) => {
  for (let i in bipJSON) {
    var regex = /(\d+)/g;
    const saldoBip = bipJSON.saldoTarjeta.match(regex)
    const saldoBipOk = parseInt(saldoBip[0] + saldoBip[1]);
    document.getElementById('contenedorSaldos').innerHTML = '$' + saldoBipOk;
  };
}

// Me muestra la tarifa de los distintos horarios
const selectOptions = () => {
  const selector = document.getElementById('tarifa');
  let valueRate = selector[selector.selectedIndex].value;
  document.getElementById('contenedorTarifa').innerHTML = '$' + valueRate;
}



//FETCH CALCULO DE TARIFA 
function infoTarifa() {
  let number2 = document.getElementById('numberCards2').value;
  let numberOfOption2 = document.getElementById('tarjeta').value;

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${number2 || numberOfOption2}`)
    .then(response => response.json())
    .then(bipJSON => {
      finalRate(bipJSON);
    })
    .catch(error => {
      console.error("No pudimos obtener respuesta a su solicitud");
      console.error("ERROR > " + error.stack);
    });
  number2.innerHTML = '';
}

//Me muestra el resultado final, saldo menos la tarifa.
const finalRate = (bipJSON) => {
  for (let i in bipJSON) {
    var regex = /(\d+)/g;
    const saldoBip = bipJSON.saldoTarjeta.match(regex)
    const saldoBipOk = parseInt(saldoBip[0] + saldoBip[1]);
    const selector = document.getElementById('tarifa');
    let valueRate = selector[selector.selectedIndex].value;
    const total = saldoBipOk - valueRate;
    document.getElementById('contenedorSaldoFinal').innerHTML = '$' + total;
  }
};
