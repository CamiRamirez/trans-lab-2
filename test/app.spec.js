const assert = require('chai').assert;
global.window = global;
require('../src/js/app'); //Enlaza el archivo

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