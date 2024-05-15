function sumNumbers(input) {
    if (!input) {
        return 0;
    }

    return input.split(',')
        .map(num => isNaN(num) || num.trim() === '' ? 0 : parseFloat(num))
        .reduce((acc, cur) => acc + cur, 0);
}

const input = "10,20,30,paul,40,,50";
const input2 = "";
const sum = sumNumbers(input);
const sum2 = sumNumbers(input2);
console.log(sum);
console.log(sum2);
