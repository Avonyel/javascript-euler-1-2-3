var previousNumber = 0;
var currentNumber = 1;
var fibonacciArray = [];
var sum = 0;

while(currentNumber < 4000000) {
    fibonacciArray.push(currentNumber);
    currentNumber += previousNumber;
    previousNumber = currentNumber - previousNumber;
}

for(var x in fibonacciArray) {
    if(fibonacciArray[x] % 2 === 0) {
        sum += fibonacciArray[x];
    }
}

console.log(sum);