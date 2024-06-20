/* 
the user needs to know how many slices of cake
will be left over after everyone has a piece
there are 12 pieces of cake
there are 5 people eating cake
*/
function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    var slicesLeft = (numberOfPieces - numberOfPeople);
    if (slicesLeft === 0){
        console.log("No leftovers for you!")
    }
    else if (slicesLeft < 3 && slicesLeft > 0){
        console.log("You have some leftovers")
    }
    else if (slicesLeft > 2 && slicesLeft < 6){
        console.log("You have leftovers to share")
    }
    else if (slicesLeft > 5) 
    console.log("Hold another party!")
}
howMuchLeftOverCake(12,5);
howMuchLeftOverCake(20,20);
howMuchLeftOverCake(10,9);
howMuchLeftOverCake(12,9);