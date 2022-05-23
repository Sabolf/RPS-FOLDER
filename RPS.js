// First Robot is a function (RPS)
//Using variable that randomly generates a number between 0 and 1
//Then decides between three choices (Rock Paper or Scisssors) depending on which number is chosen

let RPS = function(){
    let functionResult = Math.random()
        if (functionResult < .33){
            return "rock"
        }
        else if(functionResult > .33 && functionResult < .66){
            return "paper"
        }
        else if (functionResult > .66){
            return "scissors"
        }
    }
        
// Second Robot is a function (RPS)
//Using variable that randomly generates a number between 0 and 1
//Then decides between three choices (Rock Paper or Scisssors) depending on which number is chosen

    let RPS2 = function(){
    let functionResult = Math.random()
        if (functionResult < .33){
            return "rock"
        }
        else if(functionResult > .33 && functionResult < .66){
            return "paper"
        }
        else if (functionResult > .66){
            return "scissors"
        }
    
    }
    
    // Keeps Track of how many times Each robot wins and if they tie
let theFirst = 0 
let theSecond = 0 
 let theTie = 0   
 
 //Function that takes in the Two Robot functions (RPS and RPS2) 
 //Compares their answers and decides who wins and if they tied
 // returns the result, says the answers of each robot, then tells the scores of each and the amount of ties
let theChecker = function(first, second){
    if(first == second){
        theTie++
        return "The Robots Tied  (" + first + " & " + second +") First Count: "+ theFirst + ". Second Count: "+theSecond+ ". Tie Count: "+theTie+"."
    }
    else if(first == "rock" && second == "paper" || first == "scissors" && second == "rock" || first == "paper" && second == "scissors" ){
        theFirst++
        return "The Second Robot Won  (" + first + " & " + second +"). First Count: "+ theFirst + ". Second Count: "+theSecond+ ". Tie Count: "+theTie+"."
    }
    else if(second == "rock" && first == "paper" || second == "scissors" && first == "rock" || second == "paper" && first == "scissors"){
        theSecond++
        return "The First Robot Won  (" + first + " & " + second +"). First Count: "+ theFirst + ". Second Count: "+theSecond+ ". Tie Count: "+theTie+"."
    
}
}

// for loop that runs the function for 100 times

 for(i = 0; i < 100; i++){
   console.log(theChecker(RPS(),RPS2()))
 }


