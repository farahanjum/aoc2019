var fs = require('fs');
var input1 = fs.readFileSync('3a.txt').toString().split(",");
var input2 = fs.readFileSync('3b.txt').toString().split(",");

const getPathPoints = (trail) => {
    const path = [];
    var x = 0, y = 0;
    for( var i = 0; i< trail.length; i++){
        const dir = trail[i].slice(0, 1);
        const dist = parseInt(trail[i].slice(1));
        if(dir == 'R') {
            for(var j = 1; j <= dist; j++){
                path.push([x + j, y]);
            }
            x += j-1;
        }
        else if (dir == 'L') {
            for (var j = 1; j <= dist; j++) {
                path.push([x - j, y]);
            }
            x -= j-1;
        }
        if (dir == 'U') {
            for (var j = 1; j <= dist; j++) {
                path.push([x, y + j]);
            }
            y += j-1;
        }
        if (dir == 'D') {
            for (var j = 1; j <= dist; j++) {
                path.push([x, y - j]);
            }
            y -= j-1;
        }
    }
    return path;
} 

const getIntersectionPoints = (path1, path2) => {
    const res = [];
    var hash = {};
    for (var i = 0; i < path1.length; i += 1) {
        hash[path1[i]] = i;
    }
    for(var i = 0; i<path2.length; i++){
        if (hash.hasOwnProperty(path2[i])) {
            res.push(path2[i])
        }
    }
    return res;
}

const getMinDistanceFromCenter = (points) => {
    let minDist = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i< points.length; i++){
        if (Math.abs(points[i][0]) + Math.abs(points[i][1]) < minDist) minDist = Math.abs(points[i][0]) + Math.abs(points[i][1]); 
        }
    return minDist;
}

const part2  = (intersectionPoints, pathPoints1, pathPoints2) => {
    let min = Number.MAX_SAFE_INTEGER;
    for(var i=0; i<intersectionPoints.length; i++){
        min = Math.min(min, lengthTill(pathPoints1, intersectionPoints[i]) + lengthTill(pathPoints2, intersectionPoints[i]));
    }
    return min;
}

const lengthTill = (arr, point) => {
    var sum = 0;
    for (var i = 0; i < arr.length && JSON.stringify(arr[i]) != JSON.stringify(point); i++){
        sum+=1;
    }
    return sum + 1;
}
console.time('part1');

getMinDistanceFromCenter(getIntersectionPoints(getPathPoints(input1), getPathPoints(input2))); 

console.timeEnd('part1');

console.time('part2');

part2(getIntersectionPoints(getPathPoints(input1), getPathPoints(input2)), getPathPoints(input1), getPathPoints(input2) );

console.timeEnd('part2');
