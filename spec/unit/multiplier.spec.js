let multiplicador = require('../../services/multiplier');

describe("Test de Multiplicacion", function() {
    let _numberA;
    let _numberB;

    it("Debería devolver la multiplicacion entre numberA y numberB", function() {
        _numberA = 10;
        _numberB = 2;

        const result = multiplicador.multiple(_numberA, _numberB);
        
        expect(result).toEqual(20);
    });

});