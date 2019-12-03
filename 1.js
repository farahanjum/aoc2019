var fs = require('fs');
var input = fs.readFileSync('1.txt').toString().split("\n").map(num => parseInt(num));

const getModuleFuel = (mass) => {
    return Math.floor(mass / 3) - 2;
}
const overheadFuel = (fuel) => {
    const overhead = getModuleFuel(fuel);
    if (overhead <= 0) return 0;
    else return overhead + overheadFuel(overhead);
}
const calculateTotalFuelPart2 = (moduleMass) => {
    const moduleFuel = getModuleFuel(moduleMass);
    return moduleFuel + overheadFuel(moduleFuel);
}
const part1 = input.map(getModuleFuel).reduce((a,b) => a + b);
const part2 = input.map(calculateTotalFuelPart2).reduce((a, b) => a + b);

console.log(part1);
console.log(part2);