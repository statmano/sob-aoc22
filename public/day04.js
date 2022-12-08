/*
Day 4 Part 1: 
- To find the overlaps it looks like we just need to split each element by a comma, then by the hyphen. That's multiple separators though so a regular expression should be cleaner and more efficient to do so.
- We'll have four elements per pairing in an array, we compare the 0 to the 2 element to find out if it's above or below (or equal), then we look at elements 1 and 3 to see if it's the opposite (below or above... or equal). If the second condition is true, we increase the count.
*/

var count = 0;
var pairsArr = [];

function regExSplit(arr){
  for(var i = 0; i < arr.length; i++){
    pairsArr.push(arr[i].split(/[,-]/g));
  }
}

function inside(arr){
  for(var j = 0; j < arr.length; j++){
    if(Number(arr[j][0]) <= Number(arr[j][2]) && Number(arr[j][1]) >= Number(arr[j][3])){
      count++;
      console.log(`Pair ${j}: ${arr[j][0]}-${arr[j][1]}, ${arr[j][2]}-${arr[j][3]} lesser then greater: ${count}`);
    } else if(Number(arr[j][0]) >= Number(arr[j][2]) && Number(arr[j][1]) <= Number(arr[j][3])){
      count++;
      console.log(`Pair ${j}: ${arr[j][0]}-${arr[j][1]}, ${arr[j][2]}-${arr[j][3]} greater then lesser: ${count}`);
    } else{
      console.log(`Pair ${j}: ${arr[j][0]}-${arr[j][1]}, ${arr[j][2]}-${arr[j][3]} is not fully inside so count ${count}`);}
  }
}

/*
Part 2: Need to find the overlaps, which is probably easier to find by finding what does NOT overlap.
*/
var nOverlap = 0;

function overlap(arr){
  for(var k = 0; k < arr.length; k++){
    if(Number(arr[k][1] < Number(arr[k][2]) || Number(arr[k][3]) < Number(arr[k][0]))){
      nOverlap++;
      console.log(`No Overlap count is: ${nOverlap}`);
    } 
  }
  console.log(`Final Overlap is ${arr.length - nOverlap}`);
}

$("#partOneButton").click(function() {
 $.get("/textconvert", { dayFile: "./day04.txt" }, async function(data) {
   //await console.log(data);
   await regExSplit(data);
   console.log(pairsArr);
   inside(pairsArr);
  
 })
})

$("#partTwoButton").click(function() {
 $.get("/textconvert", { dayFile: "./day04.txt" }, async function(data) {
   await console.log(data);
   await regExSplit(data);
   overlap(pairsArr);
   //threeHighLoop(data);
 })
})