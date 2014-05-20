var biggestPrimeFactor = 1;
var numberToFactor = 98210069;
//This inefficient code starts to slow significantly after 8 digits//

//Figure out if each number is a factor//
for (i = 0; i < numberToFactor; i++) {
    if(numberToFactor % i === 0) {
        //If it is a factor, figure out if it's prime//
        var isPrime = true;
        for(j = 2; j < i; j++) {
            if(i % j === 0) {
                var isPrime = false;
            }
        }
        if(isPrime === true) {
            biggestPrimeFactor = i;
        }
    }
}

console.log(biggestPrimeFactor);