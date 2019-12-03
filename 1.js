var fs = require('fs');
var input = fs.readFileSync('1.txt').toString().split("\n");

const fuelCalc = (num) => {
    return Math.floor(num / 3) - 2;
}
const overheadFuel = (fuel) => {
    const overhead = fuelCalc(fuel);
    if (overhead <= 0) return 0;
    else return overhead + overheadFuel(overhead);
}

const calculateTotalFuel = (moduleMass) => {
    const moduleFuel = fuelCalc(moduleMass);
    return moduleFuel + overheadFuel(moduleFuel);
}
const totalFuel = input.map(num => parseInt(num))
    .map(calculateTotalFuel)
    .reduce((prevNum, curNum) => prevNum + curNum);

console.log(totalFuel);