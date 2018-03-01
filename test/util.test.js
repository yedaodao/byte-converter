const should = require('should');

const util = require('../lib/util');

describe('util', function () {
    describe('template', function () {
        it('should correct result', function () {
            util.template("abc__a__", {a: 1}).should.be.equal("abc1");
            util.template("abc", {a: 1}).should.be.equal("abc");
            util.template("abc__a__", {b: 1}).should.be.equal("abc__a__");
            util.template("__b__abc", {a: 2, b: 1}).should.be.equal("1abc");
            util.template("__ab_c_1__abc", {ab_c_1: 1}).should.be.equal("1abc");
            util.template("__b__abc", {a: 2, b: 1}).should.be.equal("1abc");
        });
    });
});