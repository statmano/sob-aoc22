### Day One
- Slooppppy sloppy slpoppy. I am onot proud of that code- technically it fails if the final elf is in the Top 3 or the  the highest carrier or for Part 1 or in the Top 233 for Part 2. I shou_should_ really break them into smaller pieces then link them togehther as thI don't feel confident in scaling these prarts fto future days, just h.
- Avoided using an array of arrays and just went with blank element test instead. 
- Had to reverse the order in part 2 when bumping exisiting elements down. Thought about using pop or destructuring, but in the end just wanted a working solution.

### Day Two
- Made the stupid mistake of not double checking that I had the right corresponding letters. Once I fixed it I was good though
- The return of the switch statement... I like switch statements, although I'm probably going to see a more elegant array mapping solution online and roll my eyes. I should probably learn the array manipulation a bit better.

### Day Three
- Started to get into nested loop land, but it wasn't too hairy. I also remembered about the adding three to a loop after iteration thing. I was cautious on this one and tested a lot during the process- it helped things go much smoother. 
- I didn't need to type the pValue out... turns out you can use str.charCodeAt(0) and then subtract from what a or A is, then add 1 or 27

### Day Four
- *Number(val) is IMPORTANT!!!* Don't compare text elements as numbers... otherwise 8 is greater than 30 and such. Grrrr
- Sometimes easier to think of what is the OPPOSITE of what you're looking for (no overlap)