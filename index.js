
let score = JSON.parse(localStorage.getItem('score')) || { Wins:0, Loss:0, Tie:0};



function pickComputerMove()
{
  const randNum = Math.random();
  const moveElementComputer = document.querySelector('.computer-emoji');

  let ComputerMove = '';
  
  if(randNum > 0 && randNum< 1/3)
    {
      computerMove = '✊';
      moveElementComputer.innerHTML =computerMove;
    }
  else if(randNum >1/3 && randNum< 2/3)
  {
     computerMove = '🖐'; 
    moveElementComputer.innerHTML =computerMove;
  }
  else if(randNum >2/3 && randNum< 1)
  {
     computerMove = '✌'; 
    moveElementComputer.innerHTML =computerMove;
  }
  return computerMove;
}

function updateScore()
{
  document.querySelector('.you').innerHTML= `You : ${score.Wins}`;
  document.querySelector('.computer').innerHTML= `Computer : ${score.Loss}`;
}

function setResult()
{
  document.querySelector('.result').innerHTML = `${result}`;
}
let result = '';
function playGame(playerMove)
{
  const computerMove = pickComputerMove();
  if(playerMove === '✊')
    {
      if(computerMove === '✊')
        {
          result = "Tied";
        }
      else if(computerMove === '🖐')
        {
          result = "Computer Win";
        }
      else if(computerMove === '✌')
        {
          result = "You Win";
        }
    }
  
  else if(playerMove === '🖐')
    {
       if(computerMove === '✊')
        {
          result = "You Win";
          
        }
      else if(computerMove === '🖐')
        {

            result = "Tied";

        }
      else if(computerMove === '✌')
        {
          result = "Computer Win";
        }
    }
  
   else if(playerMove === '✌')
    {
       if(computerMove === '✊')
        {
          result = "Computer Win";
        }
      else if(computerMove === '🖐')
        {
          result = "Computer Win";
        }
      else if(computerMove === '✌')
        {
          result = "Tied";
        }
    }
  
 
  if(result === 'You Win')
    {
      score.Wins +=1;
    }
  else if(result === 'Computer Win')
    {
      score.Loss +=1;
    }
  else if(result === 'Tied')
    {
      score.Tie +=1;
    }
  setResult();
  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
}

const moveElementPlayer = document.querySelector('.player-emoji');
function updatePlayerMove(emoji)
{
moveElementPlayer.innerHTML = emoji;
}


function reSet()
{
  score.Wins =0;
  score.Loss = 0;
  score.Tie = 0;
  result = '';
  updateScore();
  setResult();
}
