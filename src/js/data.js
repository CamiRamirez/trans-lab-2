//FETCH

 function infoBip() {
  let number = document.getElementById('numberCards').value;
  console.log(number);
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${number}`)
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

// recorriendo api bip y mostrando en pantalla

const numCard = (bipJSON) => {
  let showMoney = document.getElementById('contenedorSaldos');
  for (let i in bipJSON) {
    console.log(bipJSON[i]);
    showMoney.innerHTML = bipJSON.saldoTarjeta
  };
}

