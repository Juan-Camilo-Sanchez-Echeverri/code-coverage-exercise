let restador = require('../../services/subtractor');

describe("Test de Resta", function() {
    let _numberA;
    let _numberB;

    it("Debería devolver la resta entre numberA y numberB", function() {
        _numberA = 10;
        _numberB = 2;

        const result = restador.subtract(_numberA, _numberB);
        
        expect(result).toEqual(8);
    });

});