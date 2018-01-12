const should = require('should');

const converter = require('../index');

describe('converter', function () {
    describe('humanConverter', function () {
        it('should correct result', function () {
            converter(1024, 'B').value.should.be.equal(1);
        });
    });
});