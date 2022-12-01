import { isEven } from "./mods.js";

// Part 1: All that is being asked is what is the calorie count of the highest carrying elf (in calories)

// Variables needed to keep track of (part 1)
var currentCalorie = 0;
var highestCarry = 0;

// Data is coming in a one-level array. Build function to loop through the elements of the array to add each element to the currentCalorie count if it is a number. If it is blank then compare that number to the highestCarry var, if it is higher, replace it with that number- then reset currentlCalorie back to zero. 

function calorieLoop(arr){
  for(var i = 0; i < arr.length; i++){
    if(Number(arr[i]) > 0){
      currentCalorie = currentCalorie + Number(arr[i]);
      if(i == arr.length-1){
        console.log(`this is the last one, CC is ${currentCalorie}`);
      }
      console.log(`CC is ${currentCalorie}`);
    } else {
      console.log(`Elf is carrying ${currentCalorie} and hc is ${highestCarry}`);
      if(currentCalorie > highestCarry){
        
        highestCarry = currentCalorie;
        
        console.log(`hC is ${highestCarry}`);
      }
      currentCalorie = 0;
    }
  }
}

// Part 2: Just need to add in two more highest carry variables, compare the current to each, and bump them down if so. Or we can do it in one array. One array is probably the cleaner way? I guess I'll do that.
var threeCarry = [0,0,0];

function threeHighLoop(arr){
  for(var i = 0; i < arr.length; i++){
    if(Number(arr[i]) > 0){
      currentCalorie = currentCalorie + Number(arr[i]);
      if(i == arr.length-1){
        console.log(`this is the last one, CC is ${currentCalorie}`);
      }
      //console.log(`CC is ${currentCalorie}`);
    } else {
      console.log(`Elf is carrying ${currentCalorie} and hc is ${highestCarry}`);
      if(currentCalorie > threeCarry[0]){
        
        threeCarry[2] = threeCarry[1];
        threeCarry[1] = threeCarry[0];
        threeCarry[0] = currentCalorie;
        
        console.log(`tC's are ${threeCarry} and the sum is ${threeCarry[0] + threeCarry[1] + threeCarry[2]}`);
      } else if(currentCalorie > threeCarry[1]){
        
        threeCarry[2] = threeCarry[1];
        threeCarry[1] = currentCalorie;
        
        console.log(`tC's are ${threeCarry} and the sum is ${threeCarry[0] + threeCarry[1] + threeCarry[2]}`);
      } else if(currentCalorie > threeCarry[2]){
        
        threeCarry[2] = currentCalorie;
        
        console.log(`tC's are ${threeCarry} and the sum is ${threeCarry[0] + threeCarry[1] + threeCarry[2]}`);
      }
      currentCalorie = 0;
    } 
  }
}


$("#tBut").click(function() {
 $.get("/textconvert", { dayFile: "./day01.txt" }, async function(data) {
   await console.log(data);
   //calorieLoop(data);
   threeHighLoop(data);
 })
})