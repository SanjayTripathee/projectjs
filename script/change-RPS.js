let score =JSON.parse(localStorage.getItem('score'))
    || {
    win:0,
    loose:0,
    tie:0
};

      updatescore();
    //   if(!score){
    //     score ={
    //         win:0,           //calling fun ok...
    //         loose:0,
    //         tie:0
    //     }
    //   }



   
  let isautoplay = false;//we are traking weather playing or not
  let intervalid;//to save past playing id also we created outside

function autoplay(){
 if(!isautoplay){
    intervalid = setInterval(function(){
       let playermove = pickcomputermove();//this playermove variable is new variable.
                playgame(playermove);
            },1000);
            isautoplay = true;
    }else{
        clearInterval(intervalid);
        isautoplay = false;
    }
    }

    function buttonchange(){
        const play = document.querySelector('.js-stop-button')
    if(play.innerText ==="Autoplay"){
        play.innerHTML = "Stop";
    }else{
        play.innerHTML = "Autoplay";
    }
    }
            
     //addeventlistner for rock
     document.querySelector('.jsrockbutton').addEventListener('click',()=>{
        playgame('rock')
     });
     //for paper
     document.querySelector('.jspaperbutton').addEventListener('click',()=>{
        playgame('paper')
     });
     //for scissor
     document.querySelector('.jsscissorbutton').addEventListener('click',()=>{
        playgame('scissor')
     });


     //addeventlistner using keydown on body
     document.body.addEventListener('keydown',(event)=>{
        if(event.key === 'r'){
            playgame('rock');
        }else if(event.key === 'p'){
            playgame('paper');
        }else if(event.key==='s'){
            playgame('scissor');
        }
     });

     //addEventlistner autoplay
     document.querySelector('.js-button')
      .addEventListener('click',()=>{
        autoplay();
        buttonchange();
      });

   
   
   function playgame(playermove){
        const computerMove=pickcomputermove();
        
        let result='';

        if(playermove === 'scissor'){
        if(computerMove === 'rock'){
        result='loose';
        }
        else if(computerMove === 'paper'){
        result = 'win';
        }
        else if(computerMove === 'scissor'){
        result = 'tie';
        }
        }else if(playermove === 'paper'){
        
            if (computerMove === 'rock') {
                result = 'win';
            } else if (computerMove === 'paper') {
                result = 'tie';
            } else if (computerMove === 'scissor') {
                result = 'loose';
            }
        }  else if(playermove === 'rock'){
            if(computerMove === 'rock'){
        result='tie';
        }
        else if(computerMove === 'paper'){
        result = 'loose';
        }
        else if(computerMove === 'scissor'){
        result = 'win';
        }
    }
    
        if(result === 'win'){
            score.win ++;
        }
        if(result === 'loose'){
            score.loose ++;
        }
        if(result === 'tie'){
            score.tie ++;
        }
        
  
    localStorage.setItem('score',JSON.stringify(score));
  
    updatescore();
    
    document.querySelector('.js-result').innerHTML=result;
   
    document.querySelector('.js-move')
    .innerHTML=`You <img src="images/${playermove}.png" class="move-img">
        <img src="images/${computerMove}.png" class="move-img">Computer`;
}
 
 function updatescore(){
 document.querySelector('.js-score').innerHTML = `win:${score.win},loose:${score.loose},tie:${score.tie}`;
 }



function pickcomputermove(){

    let computerMove='';


const randomNumber=Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove ='rock';
    }
    else if(randomNumber >= 1/3 && randomNumber <2/3){
    computerMove ='paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissor';
    }
    return computerMove;
    }

    