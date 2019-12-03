var fs = require('fs');
var input = fs.readFileSync('1.txt').toString().split("\n").map(num => parseInt(num));

const getModuleFuel = (mass) => {
    return Math.floor(mass / 3) - 2;
}

const sum = (a, b) => { 
    return a + b;
}

const calculateTotalFuelPart2 = (moduleMass) => {
    const moduleFuel = getModuleFuel(moduleMass);
    return moduleFuel <= 0 ? 0 : moduleFuel + calculateTotalFuelPart2(moduleFuel);

}
const part1 = input.map(getModuleFuel).reduce(sum);
const part2 = input.map(calculateTotalFuelPart2).reduce(sum);

console.log(part1);
console.log(part2);