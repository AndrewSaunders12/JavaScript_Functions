console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if(count < 0){
      count = count * -1;
    }
     for(let i = 0; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(-20);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you are still a child`;
    if (age >= 16) {
        console.log(aboveSixteen);
    }else {
        console.log(belowSixteen);
    }
}
checkAge("Andrew", 19);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y) {
    if(x < 0 && y > 0) {
        console.log(`${x},${y} is Quadrant II`);
    }
    else if(x < 0 && y < 0) {
        console.log(`${x},${y} is Quadrant III`);
    }
    else if(x > 0 && y > 0) {
        console.log(`${x},${y} is Quadrant I`);
    }
    else if(x > 0 && y < 0) {
        console.log(`${x},${y} is Quadrant IV`);
    }
    else if(x == 0 && y != 0) {
        console.log(`${x},${y} is on the y-axis`)
    }
    else {
        console.log(`${x},${y} is on the x-axis`)
    }
}
whichQuadrant(4,-12);


//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3){
    if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <=side1){
        console.log(`${side1}, ${side2}, ${side3} is a invalid triangle`);
    }
    else if (side1 == side2 && side1 == side3){
        console.log(`${side1}, ${side2}, ${side3} is a equilateral triangle`);
    }
    else if (side1 == side2 && side1 != side3 || side2 == side3 && side2 != side1 || side3 == side1 && side3 != side2){
        console.log(`${side1}, ${side2}, ${side3} is a isosceles triangle`);
    }
    else if (side1 != side2 && side1 != side && side2 != side3){
        console.log(`${side1}, ${side2}, ${side3} is a scalene triangle`);
    }
}
typeOfTriangle(42, 42, 55);