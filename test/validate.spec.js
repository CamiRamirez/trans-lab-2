const assert = require('chai').assert;
global.window = global;
require('../src/js/validate.js'); //Enlaza el archivo

//Validar contraseña
describe('Validar contraseña', () => { 
  describe('Debería verificar tamaño y caracteres', () => {
    it('Debería la contraseña tener máximo 8 caracteres', () => { 
      assert.equal(validatePass("12345678"), true); 
      assert.equal(validatePass("123456789"), false);
    });
    it('Debería la contraseña no tener espacios', () => { 
      assert.equal(validatePass("12345678"), true); 
      assert.equal(validatePass("1234 5678"), false);
    });
    it('Debería la contraseña ser sólo números', () => { 
      assert.equal(validatePass("12345678"), true); 
      assert.equal(validatePass("1234D678"), false);
    });
  });
});


//Validar email
describe('validar email', () => {
	describe('verificar si existe el @', () => {
		it('deberia tener solo un @ ', () => {
			assert.equal(validateEmail('translab@email.com'), true);
			assert.equal(validateEmail('translab@@email.com'), false);
			assert.equal(validateEmail('translabemail.com'), false);
		});
		it('deberia tener un @ antes del dominio', () => {
			assert.equal(validateEmail('@email.com'),true);
			assert.equal(validateEmail('email.@com'),false);
		});
	});
	(describe('verificar que exista un dominio', () => {
		it('Deberia tener un punto y caracteres del alfabeto', () => {
			assert.equal(validateEmail('translab@email'), false);
			assert.equal(validateEmail('translab@email.'), false);
		});
	}));
});


// validar numero tarjeta bip
describe('validar numero tarjeta', () =>{
	describe('verificar que contenga máximo 10 caracteres numéricos y no contenga espacio en blanco',() =>{
		it('verificar que contenga maximo 10 caracteres',() =>{
			assert.equal(validateCard('1234567890'),true);
			assert.equal(validateCard('1234567'),true);
			assert.equal(validateCard('12345678901'),false);
		});
		it('verificar que solo sean numeros',() =>{
			assert.equal(validateCard('1234567890'), true);
			assert.equal(validateCard('12a4g609jk'), false);
		});
		it('verificar que no contenga espacio en blanco',() =>{
			assert.equal(validateCard('1234567890'), true);
			assert.equal(validateCard('12 347'), false);
			assert.equal(validateCard('12 34787686'), false);
		});
	});
});