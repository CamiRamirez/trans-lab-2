//FIREBASE
//LISTADO DE NUMEROS DE TARJETAS
firebase.database().ref('numbercard')
  .limitToLast(6) //filtro para no obtener todos los mensajes
  .once('value')
  .then((num) => {
    console.log("Numeros >" + JSON.stringify(numbercard));
  })
  .catch(() => {

  });

// Guardar los NUMEROS  en database, en una carpeta que se llama numberCard
function sendNumber() {
  if (inputCards.value.length === 0 || inputCards.value === null) {
    alert('Debes ingresar al menos 8 números')
  } else {

    const numbers = inputCards.value;
    console.log(numbers);



    //Para tener una nueva llave en la colección messages
    const newNumberKey = firebase.database().ref().child('numbercard').push().key;
    const email = document.getElementById('inputEmail').value;
    console.log(email);



    firebase.database().ref(`/${newNumberKey}`).set({
      creatorName: email,
      number: numbers,

    });
    inputCards.value = '';
  }
}

//Llamando a los numeros para que aparezcan cada vez que recargue la pagina
firebase.database().ref()
  .limitToLast(5) //muestra solo los ultimos 5 mensajes como historial al recargar la pagina
  .on('child_added', (newNumber) => {
    containerCards.innerHTML = `
              <div>
                <p>${newNumber.val().number}</p>
              </div>
          `+ containerCards.innerHTML;

    listCards.innerHTML = `
    <select>
    <option>${newNumber.val().number}</option>
    </select>
    ` + listCards.innerHTML;


    tarjeta.innerHTML = `
    
    <option>${newNumber.val().number}</option>
    
    ` + tarjeta.innerHTML;
   
  });
