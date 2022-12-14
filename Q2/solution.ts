const fs = require('fs')
const rpsFile = fs.readFileSync('adventofcode22/Q2/input.txt', 'utf-8');
let theirPick = 1;
let myPick = 1;

let outcomeArray = [[4,8,3],[1,5,9],[7,2,6]];

//Column 1 is what your opponent plays
//Column 2 is what you should play in response, X-rock, Y-paper, Z-scissors
//Score = Column 2 (1 for Rock, 2 for Paper, and 3 for Scissors) plus outcome (0 ost, 3 draw, and 6 won).

let score: number = 0;

rpsFile.split(/\r?\n/).forEach((line) => {
    theirPick = line.charCodeAt(0)-65;
    myPick = line.charCodeAt(2)-88;
    score = score + outcomeArray[theirPick][myPick];
    console.log(line)
    console.log(outcomeArray[theirPick][myPick])
    // console.log("New score"+score)  
})
console.log("Final score is "+score);


//Part 2
let newOutcomes = [[3,4,8],[1,5,9],[2,6,7]];
let newScore = 0;
rpsFile.split(/\r?\n/).forEach((line) => {
    theirPick = line.charCodeAt(0)-65;
    myPick = line.charCodeAt(2)-88;
    newScore = newScore + newOutcomes[theirPick][myPick];
    // console.log("New score"+score)  
})
console.log("Final new score is "+newScore);