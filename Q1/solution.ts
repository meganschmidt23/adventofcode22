const f = require('fs')
const calorieFile = f.readFileSync('adventofcode22/Q1/calories.txt', 'utf-8');
let elfArray: number[] = [];
let elfIndex: number = 1;

calorieFile.split(/\r?\n/).forEach((line) => {
    if(line === ""){
        elfIndex++;
    }
    else{
        if(elfArray[elfIndex]===undefined){
            elfArray.push(parseInt(line))
        }
        else{
            elfArray[elfIndex] = elfArray[elfIndex] + parseInt(line);
        }
    }
  });

  const value = Math.max(...elfArray);
  console.log(value)
  const answer = elfArray.indexOf(value);
  console.log("The answer is the elf in postion:"+answer)

//   Part 2 : Top 3 Max
  elfArray = elfArray.sort((a,b)=>b-a) ;
  console.log(elfArray[0]+elfArray[1]+elfArray[2])
