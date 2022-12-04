// We need a total score counter and a fight result var.ovar score, result;
var score = 0, result;

// A switch statement to determine what beats what
function fight(first, second){
  switch(second){
    case 'X':
      score += 1;
      if(first == "C"){
        score += 6;
        console.log(`Winner w Rock! Add 7. Score now: ${score}`);
      } else if(first == "A"){
        score += 3;
        console.log(`Draw w Rock! Add 4. Score now: ${score}`);
      }
      //console.log(`the score is ${score}`)
      break;
    case 'Y':
      score += 2;
      if(first == "A"){
        score += 6;
        console.log(`Winner w Paper! Add 8. Score now: ${score}`);
      } else if(first == "B"){
        score += 3;
        console.log(`Draw w Paper! Add 5. Score now: ${score}`);
      }
      //console.log(`the score is ${score}`)
      break;
    case 'Z':
      score += 3;
      if(first == "B"){
        score += 6;
        console.log(`Winner w Scissor! Add 9. Score now: ${score}`);
      } else if(first == "C"){
        score += 3;
        console.log(`Draw w Scissor! Add 6. Score now: ${score}`);
      }
      //console.log(`the score is ${score}`)
      break;
  }
}

// Loop through array and do the fight function to get the scoring info
function loopArray(arr){
  for(var i = 0; i < arr.length; i++){
    fight(arr[i].charAt(0), arr[i].charAt(2));
  }
}

// Part 2: The second item now determines if you should win/lose/draw instead of what to pick. Sooo...
function roundTwo(first, second){
  switch(second){
    case 'X':
      if(first == "A"){
        score += 3;
        console.log(`Loser with Scissors. Score: ${score}`);
        break;
      } else if(first == "B"){
        score += 1;
        console.log(`Loser with Rock. Score: ${score}`);
        break;
      } else if(first == "C"){
        score += 2;
        console.log(`Loser with Paper. Score: ${score}`);
        break;
      }
    case 'Y':
      if(first == "A"){
        score += 4;
        console.log(`Draw with Rock. Score: ${score}`);
        break;
      } else if(first == "B"){
        score += 5;
        console.log(`Draw with Paper. Score: ${score}`);
        break;
      } else if(first == "C"){
        score += 6;
        console.log(`Draw with Scissors. Score: ${score}`);
        break;
      }
    case 'Z':
      if(first == "A"){
        score += 8;
        console.log(`Win with Paper. Score: ${score}`);
        break;
      } else if(first == "B"){
        score += 9;
        console.log(`Win with Scissors. Score: ${score}`);
        break;
      } else if(first == "C"){
        score += 7;
        console.log(`Win with Rock. Score: ${score}`);
        break;
      }
  }
}

// Loop through for Part Two w/ other function
function loopTwo(arr){
  for(var i = 0; i < arr.length; i++){
    roundTwo(arr[i].charAt(0), arr[i].charAt(2));
  }
}

$("#partOneButton").click(function() {
 $.get("/textconvert", { dayFile: "./day02.txt" }, async function(data) {
   await console.log(data);
   loopArray(data);
   //threeHighLoop(data);
 })
})

$("#partTwoButton").click(function() {
 $.get("/textconvert", { dayFile: "./day02.txt" }, async function(data) {
   await console.log(data);
   loopTwo(data);
   //threeHighLoop(data);
 })
})