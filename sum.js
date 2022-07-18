// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...amount => {
    let total = 0;

    for(let i = 0; i < amount.length; i++){

        total += amount[i];


    }
    return total;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
