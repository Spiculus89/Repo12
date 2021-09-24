// Only change code below this line
    function rangeOfNumbers(startN, endN){
        if (startN>endN) {
            return 'The starting number will always be less than or equal to the ending number';
        } else if (startN - endN === 0) {
            return [startN];
        } else {
            const count = rangeOfNumbers(startN, endN-1);
            count.push(endN);
            return count;
        }
    }

// Only change code above this line

console.log(rangeOfNumbers(77,66)); // Change this line
module.exports = rangeOfNumbers;