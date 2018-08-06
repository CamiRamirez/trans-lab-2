//FETCH

function infoBip() {
  let number = document.getElementById('numberCards').value;
  let numberOfOption = document.getElementById('listCards').value;
  console.log(number);
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${number}${numberOfOption}`)
    .then(response => response.json())
    .then(bipJSON => {
      console.log(bipJSON);
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
  const showMoney = document.getElementById('contenedorSaldos');
  for (let i in bipJSON) {
    console.log(bipJSON[i]);
    var regex = /(\d+)/g;
    const saldoBipOk = bipJSON.saldoTarjeta.match(regex)
    console.log(saldoBipOk);
    showMoney.innerHTML = '$' + saldoBipOk;
  };
}

// Me muestra la tarifa de los distintos horarios
function selectOptions() {
  const selector = document.getElementById('tarifa');
  let valueRate = selector[selector.selectedIndex].value;
  document.getElementById('contenedorTarifa').innerHTML = '$' + valueRate;
}


//Me muestra el resultado final, saldo menos la tarifa.
function finalRate() {
  const resultCost = document.getElementById('contenedorSaldoFinal');
  const selector = document.getElementById('tarifa');
  let valueRate = selector[selector.selectedIndex].value;

  const total = saldoBipOk - valueRate;
  console.log(saldoBipOk);
  console.log (total);
  total.innerHTML = resultCost;
};