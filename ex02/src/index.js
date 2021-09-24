// Only change code below this line
function myCounter(n) {
    if (n>=1){
        const countArray = myCounter(n-1);
        countArray.unshift(n);
        return countArray;
    } else {
        return [];
    }
}
// Only change code above this line

console.log(myCounter(1)); // Change this line
module.exports = myCounter;