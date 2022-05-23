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
     let theTie = 0       

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
let theFirst = 0 
let theSecond = 0   
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

 for(i = 0; i < 100; i++){
   console.log(theChecker(RPS(),RPS2()))
 }


