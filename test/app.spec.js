const assert = require('chai').assert;
global.window = global;
require('../src/js/app'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar contraseña', () => { 
  describe('Debería verificar que tenga máximo 8 caracteres', () => {
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