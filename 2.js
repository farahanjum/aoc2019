const getInput = () => {
    return [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 19, 1, 19, 5, 23, 1, 23, 6, 27, 2, 9, 27, 31, 1, 5, 31, 35, 1, 35, 10, 39, 1, 39, 10, 43, 2, 43, 9, 47, 1, 6, 47, 51, 2, 51, 6, 55, 1, 5, 55, 59, 2, 59, 10, 63, 1, 9, 63, 67, 1, 9, 67, 71, 2, 71, 6, 75, 1, 5, 75, 79, 1, 5, 79, 83, 1, 9, 83, 87, 2, 87, 10, 91, 2, 10, 91, 95, 1, 95, 9, 99, 2, 99, 9, 103, 2, 10, 103, 107, 2, 9, 107, 111, 1, 111, 5, 115, 1, 115, 2, 119, 1, 119, 6, 0, 99, 2, 0, 14, 0];
}

const prepInput = (rawInput) => {
    rawInput[1] = 12;
    rawInput[2] = 2;
    return rawInput;
}

const part1 = (input) => {
    for (var i = 0; i < input.length; i++) {
        if (input[i] == 99) break;
        if (input[i] == 1) {
            input = doAddOp(input, i);
            i += 3;
        }
        else if (input[i] == 2) {
            input = doMultiplyOp(input, i);
            i += 3;
        }
        else continue;
    }
    return input;
}


const doAddOp = (arr, i) => {
    if(i+3 < arr.length) arr[arr[i + 3]] = arr[arr[i+1]] + arr[arr[i+2]];
    return arr;
}

const doMultiplyOp = (arr, i) => {
    if (i + 3 < arr.length) arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
    return arr;
}


const part2 = (input) => {
    for (var i=0; i< 100; i++){
        for (var j=0; j<100; j++){
            input = getInput();
            input[1] = i, input[2] = j;
            const testingVal = part1(input)[0];
            if (testingVal == 19690720) {
                console.log('haulting----------', i, j);
                break;
            }
        }
    }
}
console.log((part2(getInput())));
// console.log(part1(prepInput(getInput())));
