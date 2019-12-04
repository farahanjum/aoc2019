
const isNotDecreasing = (num) => {
    return JSON.stringify((num).toString().split('').sort()) == JSON.stringify((num).toString().split(''))
}
const hasAdjDuplicates = (num) => {
    let hasDup = false;
    const str = num.toString();
    for(var i = 1; i< str.length; i++){
        if(str[i] == str[i-1]) {
            hasDup = true;
            break;
        }
    }
    return hasDup;
} 


const hasAdjDuplicatesPart2 = (num) => {
    let hasDup = false;
    const str = num.toString();
    for (var i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1] 
            && ((i -2 >= 0) ? str[i - 1] != str[i - 2] : true)
            && ((i + 1 < str.length ? str[i] != str[i + 1] : true ))
            ) {
            hasDup = true;
            break;
        }
    }
    return hasDup;
} 

const solve = (range) => {
    const l = range.split('-')[0], r = range.split('-')[1];
    let part1 = 0, part2 = 0;
    for(var i = l; i<= r; i++){
        if (isNotDecreasing(i) && hasAdjDuplicates(i)) part1+=1;
        if (isNotDecreasing(i) && hasAdjDuplicatesPart2(i)) part2+=1;
    }
    console.log(part1, part2);
    return;
}

solve('171309-643603');