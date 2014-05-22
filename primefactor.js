var biggestPrimeFactor = 1;
var numberToFactor = 600851475143;
var factorArray = []

//Figure out if each number is a factor, up to the numbertoFactor's//
//square root//
for (i = 2; i <= Math.sqrt(numberToFactor); i++) {
    if(numberToFactor % i === 0) {
        //If it is a factor, figure out if it's prime//
        factorArray.push(i);
        var isPrime = true;
        for(j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                var isPrime = false;
            }
        }
        if(isPrime === true) {
            biggestPrimeFactor = i;
        }
    }
}

//Find the pair for each of the below-the-square-root factors, giving//
//us the rest of the factors for the numberToFactor, and figure out//
//if each is prime//
for (factor in factorArray) {
    var bigFactor = numberToFactor / factorArray[factor];
    var isPrime = true
    for (i = 2; i <= Math.sqrt(bigFactor); i++)
        if(bigFactor % i === 0) {
            var isPrime = false;
        }
    if(isPrime === true) {
        biggestPrimeFactor = bigFactor;
    }
}

//If no prime factors were found, the numberToFactor must be prime//
if(biggestPrimeFactor === 1) {
    biggestPrimeFactor = numberToFactor;
}

console.log(biggestPrimeFactor);