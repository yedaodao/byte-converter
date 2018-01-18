const should = require('should');

const converter = require('../index');

describe('converter', function () {
    describe('humanConverter', function () {
        it('should correct result', function () {
            converter.humanConverter(1024, 'B').value.should.be.equal(1);
            converter.humanConverter(3600, 's').value.should.be.equal(1);
            converter.humanConverter(0, 'B').value.should.be.equal(0);
        });
    });
});