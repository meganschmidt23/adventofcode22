const f = require('fs')
const sackFile = f.readFileSync('adventofcode22/Q3/input.txt', 'utf-8');

let sum = 0;

sackFile.split(/\r?\n/).forEach((line:string) => {
    let halfLength = line.length/2;
    let comp1 = line.slice(0,halfLength);
    let comp2 = line.slice(halfLength,line.length);
    let duplicate = Array.from(comp1).filter(present => Array.from(comp2).includes(present));
    if(duplicate[0].charCodeAt(0)>96){
        sum = sum + duplicate[0].charCodeAt(0) - 96;
    }
    else {
        sum = sum + duplicate[0].charCodeAt(0) - 38;
    }
});

console.log("The sum of priorities is "+sum)




//Part 2
let firstLine = '';
let secondLine = '';
let thirdLine = '';
let counter = 1;
let newSum = 0;

sackFile.split(/\r?\n/).forEach((line:string) => {
    if (counter%3 === 1){
        firstLine = line;
        counter++;
    }
    else if (counter%3 === 2){
        secondLine = line;
        counter++;
    }
    else {
        thirdLine = line;
        let duplicate1 = Array.from(firstLine).filter(present => Array.from(secondLine).includes(present));
        let duplicate2 = Array.from(secondLine).filter(letter => Array.from(thirdLine).includes(letter));
        let answer = duplicate1.filter(ans => duplicate2.includes(ans))
        counter++;
        if(answer[0].charCodeAt(0)>96){
            newSum= newSum + answer[0].charCodeAt(0) - 96;
        }
        else {
            newSum = newSum+ answer[0].charCodeAt(0) - 38;
        }
    }
});
console.log("The new sum is "+newSum)