var assert = require("chai").assert;
var passesLuhn = require("../luhn");

describe("Luhn", function() {
  it("Number provided should be a number with 10 digits", function() {
    var providedNum = 79927398713
    var result = false
    if (providedNum.toString().length === 11){result = true}
    assert.isTrue(result);
  });

  it("Number provided should pass algorithm", function() {
    var  providedNum = 79927398713
    assert.isTrue(passesLuhn(providedNum));
  });

});
