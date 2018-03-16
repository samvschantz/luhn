
function luhn(acctNumber){
  var doubledNumsTotal = 0
  var notDoubledNumsTotal = 0

  var reverseNumArray = acctNumber.toString().split('').reverse()
  var checkDig = Number(reverseNumArray[0])

  reverseNumArray = reverseNumArray.splice(1,reverseNumArray.length)

  for (i = 0; i < reverseNumArray.length; i++){
    if (i%2 === 0){
      var doubledNums = (reverseNumArray[i] * 2)
      var doubledNumsArray = doubledNums.toString().split('')

      if (doubledNumsArray.length > 1){
        var numOne = Number(doubledNumsArray[0])
        var numTwo = Number(doubledNumsArray[1])
        doubledNumsTotal += numOne
        doubledNumsTotal += numTwo
      } else {
        doubledNumsTotal += Number(doubledNumsArray)
      }

    } else {
      //console.log(reverseNumArray[i])
      notDoubledNumsTotal += Number(reverseNumArray[i])
    }
    var totalNonCheckDig = doubledNumsTotal + notDoubledNumsTotal
  }

  var totalNonCheckDig = doubledNumsTotal + notDoubledNumsTotal

  var passesLuhn = false
  if (((checkDig + totalNonCheckDig)*9)%10 === 0 /*&& acctNumber.toString().length === 11*/){
    console.log(true)
  } else {
    console.log(false)
  }
  }

module.exports = luhn;

luhn(79927398713) // should be true
luhn(79927398714)
luhn(49927398716)
luhn(49927398717)
luhn(1234567812345678)
luhn(1234567812345670)
luhn(4444444444)
luhn(0)
luhn(4)
luhn(38)
luhn(550)

