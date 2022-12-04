/* What we'll need to do
- get the length of each string and divide by two, mark that as the cutoff variable (starts 2nd compartment)
- Splice the first compartment to it's own test array
- Loop through the chars of the 2nd compartment to see if they match any letter in the first
- Scoring can just be done with one array and taking it's position and adding one to it
- Keep a running tally and add each value up to it- log this for the answer
*/

var priorities = 0;
var splitNumber = 0;
var compTwoArr = [];
var theError;
const pValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Loop through each character to find the match that's in compTwoArr


// Get length of string and divide by two, assign to splitNumber
async function getLength(string){
  splitNumber = (string.length / 2);
  //console.log(`String breaks at ${splitNumber}`);
  compTwoArr = string.slice(splitNumber, string.length);
  //console.log(`c is ${compTwoArr}`);
}

//

// Loop through data for part 1
function loopOne(arr){
  for(var i = 0; i < arr.length; i++){
    getLength(arr[i]);
    for(var j = 0; j < arr[i].length; j++){
     let found = compTwoArr.includes(arr[i][j]);
      if(found == true){
      console.log(`${arr[i][j]} is ${found}`);
      let pV = (1 + pValue.indexOf(arr[i][j]));
      priorities += pV;
      console.log(`Total is: ${priorities}`);
      break;
      }   
    }
  }
}

// Part Two - break them into groups of three somehow, then find the common item. I'll just loop through the first line and do an includes on the other two.
var elfA, elfB, elfC = 0;
async function loopTwo(arr){
  for(var h = 0; h < arr.length; h+=3){
    elfA = h;
    elfB = h+1;
    elfC = h+2;
    for(var l = 0; l < arr[h].length; l++){
      let match = arr[elfB].includes(arr[h][l]);
      if(match == true){
        let matchTwo = arr[elfC].includes(arr[h][l]);
        if(matchTwo == true){
          console.log(`paaaarty it's ${arr[h][l]}`);
          let pV = (1 + pValue.indexOf(arr[h][l]));
          priorities += pV;
          console.log(`Total is: ${priorities}`);
          break;
        }
        
      }
    }
  }
}


$("#partOneButton").click(function() {
 $.get("/textconvert", { dayFile: "./day03.txt" }, async function(data) {
   await console.log(data);
   await loopOne(data);
   //findLoop(data[0]);
 })
})

$("#partTwoButton").click(function() {
 $.get("/textconvert", { dayFile: "./day03.txt" }, async function(data) {
   await console.log(data);
   loopTwo(data);
 })
})