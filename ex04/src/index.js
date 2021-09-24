// Only change code below this line
function sumFibonacci(num){
       var previousN = 0;
       var currentN = 1;
       var result = 0;
       while(currentN <= num){
           if (num === 1) {
               result = 1;
           }
           else if (currentN % 2 !== 0) {
               result += currentN;
           }
           currentN += previousN;
           previousN = currentN - previousN;
       }
       return result;
}
// Only change code above this line

console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;