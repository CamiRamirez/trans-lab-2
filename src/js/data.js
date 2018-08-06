//FETCH

function infoBip() {
  let number = document.getElementById('numberCards').value;
  let numberOfOption = document.getElementById('listCards').value;
  console.log(number);
  number.innerHTML = '';
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${number || numberOfOption}`)
    .then(response => response.json())
    .then(bipJSON => {
      console.log(bipJSON);
      numCard(bipJSON);
    })
    .catch(error => {
      console.error("No pudimos obtener respuesta a su solicitud");
      console.error("ERROR > " + error.stack);
    });
}

// recorriendo api bip y mostrando en pantalla el Saldo
const numCard = (bipJSON) => {
  for (let i in bipJSON) {
    var regex = /(\d+)/g;
    const saldoBip = bipJSON.saldoTarjeta.match(regex)
    const saldoBipOk = parseInt(saldoBip[0] + saldoBip[1]);
    document.getElementById('contenedorSaldos').innerHTML = '$' + saldoBipOk;
    finalRate(saldoBipOk);
  };
}

//Me muestra el resultado final, saldo menos la tarifa.
finalRate = (saldoBipOk) => {
  const total = saldoBipOk - valueRate;
  console.log(saldoBipOk);
  console.log(total);
  document.getElementById('contenedorSaldoFinal').innerHTML = total;
};


// Me muestra la tarifa de los distintos horarios
selectOptions = () => {
  const selector = document.getElementById('tarifa');
  let valueRate = selector[selector.selectedIndex].value;
  document.getElementById('contenedorTarifa').innerHTML = '$' + valueRate;
}




