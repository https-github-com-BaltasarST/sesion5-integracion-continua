// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con la función para testear
var operacion = require('../operation.js');

// Test
it('comprobar función par', function() {
	assert.equal(operacion.par(4), true);
	assert.equal(operacion.par(5), false);
	assert.equal(operacion.par(8), true);
});
