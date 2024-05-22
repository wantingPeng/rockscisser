let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};

updateScoreELE();

/*if (score===null){
score={
  wins:0,
  losses:0,
  ties:0
};
if (!score){
score={
  wins:0,
  losses:0,
  ties:0
};*/

  function playGame(playerMove){
        const computerMove=pickComputerMove();
  let result='';
  if (playerMove==='scissors'){
  if(computerMove==='rock'){
      result='you lose';
    }else if(computerMove==='paper'){
      result='you win';
    }
    else if (computerMove==='scissors'){
      result='Tie';
    }}

  else if(playerMove==='paper'){
    console.log('here')

    if(computerMove==='rock'){
      result='you win';
    }else if(computerMove==='paper'){
      result='Tie';
    }
    else if (computerMove==='scissors'){
      result='you lose';
    }}
    
    else if (playerMove==='rock'){
      console.log('here')

     if(computerMove==='rock'){
      result='Tie';
    }else if(computerMove==='paper'){
      result='you lose';
    }
    else if (computerMove==='scissors'){
      result='you win';
    }}

    if (result==='you win'){
      score.wins  +=1;
    }else if(result==='you lose'){
      score.losses +=1;
    }else if(result==='Tie'){
      score.ties +=1;
    }
  updateScoreELE();
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML=`${result}`;
    document.querySelector('.js-move').innerHTML=`you <img src="jsIntroPro/${playerMove}-emoji.png" class="icon">
 computer <img src="jsIntroPro/${computerMove}-emoji.png" class="icon">`;

    }
 let isAutoPlaying=false;
let intervalId;
    function autoPlay(){
      if(!isAutoPlaying){
        intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
      },1000);
      isAutoPlaying=true;
      //console.log(isAutoPlaying=true);

    }
      else {
clearInterval(intervalId);
isAutoPlaying=false; 
      }
    }
  
  function updateScoreELE(){
    document.querySelector('.js-score')
  .innerHTML=`wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`

  }

  function pickComputerMove(){
    const randomNumber=Math.random();
  computerMove='';
  if (randomNumber >=0&&randomNumber<1/3){
    computerMove= 'rock';
  }else if(randomNumber>=1/3&&randomNumber<=2/3){
  computerMove='paper';
  }
  else if(randomNumber>=2/3&& randomNumber < 1){
 computerMove='scissors';
}
return computerMove;
  }