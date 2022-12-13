function dividier() {
    this.divide = function (numberA, numberB) {
        return numberA / numberB;
    }
}

module.exports = new dividier(); 