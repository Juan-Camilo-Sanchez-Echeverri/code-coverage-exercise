let divisor = require('../../services/divider');

describe("Test de Division", function() {
    let _numberA;
    let _numberB;

    it("Debería devolver la division entre numberA y numberB", function() {
        _numberA = 10;
        _numberB = 2;

        const result = divisor.divide(_numberA, _numberB);
        
        expect(result).toEqual(5);
    });

});