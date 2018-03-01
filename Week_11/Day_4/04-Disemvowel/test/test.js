var expect = require("chai").expect;
var disemvowel = require("../disemvowel.js");

describe("Disemvowel", function() {
    it("should properly remove all vowels in a passed string", function() {
        expect(disemvowel("catapiller")).to.equal("ctpllr");
    });

    it("should properly convert number types to a string", function() {
        expect(disemvowel(90877)).to.equal("90877");
    });

    it("should properly remove all vowels in a passed string when capitalized", function() {
        expect(disemvowel("HELLO")).to.equal("HLL");
    });

    it("should throw an error when a passed argument is not a string or a number", function() {
        expect(function() {
            disemvowel(false);
        }).to.throw(Error);
        expect(function() {
            disemvowel(true);
        }).to.throw(Error);
    });

    it("should throw an error when a passed argument is null or undefined", function() {
        expect(function() {
            disemvowel(null);
        }).to.throw(Error);
        expect(function() {
            disemvowel(undefined);
        }).to.throw(Error);
    });
});