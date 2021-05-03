function result(playerOne,playerTwo)
{
    if(playerOne=="rock")
    {
        if(playerTwo=="rock")
        {
            return "Tie"
        }
        else if(playerTwo=="paper")
        {
            return "Player2 wins"
        }
        else{
              return "Player1 wins"
        }
    }
    else if(playerOne=="paper")
    {
        if(playerTwo=="rock")
        {
            return "Player1 wins"
        }
        else if(playerTwo=="paper")
        {
            return "Tie"
        }
        else{
              return "Player2 wins"
        }
    }
    else{
        if(playerTwo=="rock")
        {
            return "Player2 wins"
        }
        else if(playerTwo=="paper")
        {
            return "Player1 wins"
        }
        else{
              return "Tie"
        }
    }
}

function test(name,actual,expected)
{
    if(actual===expected){
        console.log(name+": Test passed ,"+actual+" output equals to "+expected+" output")
    }
    else{
        console.log(name+": Test failed! ,"+actual+" output not equals to "+expected+" output")

    }
    
}

test("player1 :rock, player2 :paper","Player2 wins",result("rock","paper"))
test("player1 :rock, player2 :scissors","Player1 wins",result("rock","scissor"))
test("player1 :rock, player2 :rock","Tie",result("rock","rock"))
test("player1 :paper, player2 :paper","Tie",result("paper","paper"))
test("player1 :paper, player2 :scissors","Player2 wins",result("paper","scissor"))
test("player1 :paper, player2 :rock","Player1 wins",result("paper","rock"))
test("player1 :scissors, player2 :paper","Player1 wins",result("scissor","paper"))
test("player1 :scissors, player2 :scissors","Tie",result("scissor","scissor"))
test("player1 :scissors, player2 :rock","Player2 wins",result("scissor","rock"))