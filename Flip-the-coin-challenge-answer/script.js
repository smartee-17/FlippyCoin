// Variables
 let randomNumber = '';

 let side = '';

 let result = '';

 let resultWord = '';

 let score = JSON.parse(localStorage.getItem('scores'))

 ||
 {
  win: 0,
  lose: 0
};

// Varibles for DOM
const resetElement = document.querySelector('.js-reset-btn');

const headElement = document.querySelector('.js-head');

const tailElement = document.querySelector('.js-tails');

const flipElement = document.querySelector('.js-flip-btn');

const wordElement = document.querySelector('.js-word');

const infoElement = document.querySelector('.js-info-btn');

const modalElement = document.querySelector('.js-modal');

const closeElement = document.querySelector('.js-close-btn');

const contentElement = document.querySelector('.js-content');

const overlayElement = document.querySelector('.js-overlay');

const correctElement = document.querySelector('.js-correct-guess');

const WrongElement = document.querySelector('.js-wrong-guess');

const coinElement = document.querySelector('.js-coin');

const frontElement = document.querySelector('.js-front');

const backElement = document.querySelector('.js-back');

const winMsg = document.querySelector(".js-coin-win");

const loseMsg = document.querySelector(".js-coin-lose");

const flipSound = new Audio("/Flip-the-coin-challenge-answer/resources/coin-drop-432151.mp3");

const winSound = new Audio("/Flip-the-coin-challenge-answer/resources/mixkit-achievement-bell-600.wav");

const loseSound = new Audio("/Flip-the-coin-challenge-answer/resources/mixkit-losing-piano-2024.wav");

const InfoToolTipElement = document.querySelector('.js-info-tool-tip');

const resetToolTipElement = document.querySelector('.js-reset-tool-tip');


updateScoreUi();

// Randomiser Function
function randomInput() {


  randomNumber = Math.round(Math.random()) ;

  if (randomNumber === 0) {
    side = 'Head';

  } else if(randomNumber === 1){
    side = 'Tails';

  }

  return side;
}

// score UI 
function updateScoreUi() {
  correctElement.innerHTML = score.win;
  WrongElement.innerHTML = score.lose;
}


//  Guess Function

let guess ='';

function Guess(option) {
  guess = option;
}

function resultFunction () {
 if (!guess){
    wordElement.innerHTML = 'Please select Head or Tails before flipping';

    wordElement.classList.add('error');

    winMsg.classList.add('hidden');
    loseMsg.classList.add('hidden');
    winMsg.classList.remove('show-result');
    loseMsg.classList.remove('show-result');

    headElement.classList.remove('selected');
    tailElement.classList.remove('selected');

    return;
 } else{  
  flipAnimation();
  wordElement.innerHTML = '';
  wordElement.classList.remove('error');
  if (guess === side ){
    result = 'Win';
  }
  else if (guess !== side){
   result = 'Lose';
  }   
}

  if(!result){
      return;
  } else{
    if ( result === 'Win'){
      score.win += 1;
    }
    else if( result ==='Lose'){
      score.lose += 1;
    } 
  }

  localStorage.setItem('scores', JSON.stringify(score));
}

function generateRule() {
  const rulesHTML = `
<div class="rules-container flex">
  <h2 class = "margin">🎲 Quick Guide</h2>

    <div class="play-guide">
      <h3 class = "margin">How to Play</h3>
    <ol class = "margin ">
      <li><strong>Pick Your Side:</strong> Choose <em>Head</em> or <em>Tail</em> before the coin flips.</li>
      <li><strong>Make Your Guess:</strong> After choosing, press the <em>Flip</em> button to flip the coin.</li>
      <li><strong>Score Points:</strong>
        <ul>
          <li>✅ <strong>Correct Guess:</strong> &#43;1 point to your <em>Correct</em> score.</li>
          <li>❌ <strong>Wrong Guess:</strong> &#43;1 point to your <em>Wrong</em> score.</li>
        </ul>
      </li>
      <li><strong>Keep Flipping:</strong> Play as many rounds as you want and test your luck!</li>
    </ol>

    <p class = "margin"><strong>Pro Tip:</strong> Every flip counts! Luck favors the persistent.</p>

    </div>


      <div class="button-guide">
        <h3 class = "margin">Game Buttons Guide</h3>
        <ul class = "margin">
          <li><strong>Reset Button:</strong> Resets both <em>Correct</em> and <em>Wrong</em> scores back to zero.</li>
          <li><strong>Head Button:</strong> Selects “Head” as your guess.</li>
          <li><strong>Tail Button:</strong> Selects “Tail” as your guess.</li>
          <li><strong>Flip Button:</strong> Flips the coin and reveals the result.</li>
          <li><strong>Rules Button:</strong> Opens this guide at any time.</li>
        </ul>
          
      </div>
</div>
`;

    contentElement.innerHTML = rulesHTML;

}

// Animation function
function flipAnimation() {
  flipSound.currentTime = 0;
  flipSound.play();

  flipElement.disabled = true;


  coinElement.style.animation = side === "Head"
  ? "spin-heads 2s ease-in-out forwards"
  : "spin-tails 2s ease-in-out forwards";

  const shine = coinElement;
  shine.style.setProperty("--shine", "running");
  coinElement.style.setProperty("animation-play-state", "running");
  coinElement.style.setProperty("animation", coinElement.style.animation + ", shine 1.2s ease-in-out");

    // After flip
  setTimeout(() => {
  // Bounce effect
  coinElement.style.animation = "bounce 0.4s ease";
  
  setTimeout(() => {
    coinElement.style.animation = "none";
    flipElement.disabled = false;
  }, 400);
}, 2000); // matches spin time

  flipSideImage();
}

function flipSideImage() {
  if(side === 'Head') {
    backElement.classList.add('hidden');
    frontElement.classList.remove('hidden');
  } else if ( side == 'Tails') {
    backElement.classList.remove('hidden');
    frontElement.classList.add('hidden');
  }
}


let timer;

// showResult function
function showResult() {
  winMsg.classList.add('hidden');
  loseMsg.classList.add('hidden');
  winMsg.classList.remove('show-result');
  loseMsg.classList.remove('show-result');
    
    timeOut();
}

function timeOut() {
  wordElement.innerHTML = side;

  clearTimeout(timer);

  timer = setTimeout(() => {
      if (result === "Win") {
          winSound.play();
          // winSound.currentTime = 0;

      winMsg.classList.remove('hidden');
      loseMsg.classList.add('hidden');
      winMsg.classList.add('show-result');
      loseMsg.classList.remove('show-result');
      wordElement.innerHTML = '';

      } else if (result === 'Lose'){
          loseSound.play();
          // loseSound.currentTime = 0;
        
        loseMsg.classList.remove('hidden');
        winMsg.classList.add('hidden');
        loseMsg.classList.add('show-result');
        winMsg.classList.remove('show-result');

        wordElement.innerHTML = '';
        
      };

      updateScoreUi();
  }, 1500);

  return timer
}

// InfoElement EventListener
infoElement.addEventListener('click', () => {

  if (modalElement.classList.contains('hidden')){
    modalElement.classList.add('show');
    modalElement.classList.remove('hidden');
    contentElement.classList.add('fade-in');
    contentElement.classList.remove('fade-out');

    generateRule();
  }



});

// close btn eventlistener
closeElement.addEventListener('click', () => {

  if(modalElement.classList.contains('show')){
     contentElement.classList.add('fade-out');
     contentElement.classList.remove('fade-in');     
  }
});

// Animation Event listener
contentElement.addEventListener("animationend", () => {
  if (contentElement.classList.contains("fade-out")) {
    modalElement.classList.remove('show');
    modalElement.classList.add('hidden');
  }
});

//Close by clicking outside
document.querySelector('.js-main').addEventListener('click', (event) => {
    if(event.target === overlayElement){

      if(modalElement.classList.contains('show')){
        contentElement.classList.add('fade-out');
        contentElement.classList.remove('fade-in');  
     }

    }
});

// Head Button eventListener
headElement.addEventListener('click', () => {
    Guess('Head');
    headElement.classList.add('selected');
    tailElement.classList.remove('selected');
});

tailElement.addEventListener('click', () => {
    Guess('Tails');
    headElement.classList.remove('selected');
    tailElement.classList.add('selected');
});

// Flip Element EventListener
flipElement.addEventListener('click', () => {
    randomInput();
    resultFunction();

    guess = '';
    winMsg.classList.add('hidden');
    loseMsg.classList.add('hidden');
    winMsg.classList.remove('show-result');
    loseMsg.classList.remove('show-result');
});

// Reset Element EventListener
resetElement.addEventListener('click', () => {
  score.win = 0;
  score.lose = 0;
  wordElement.innerHTML = '';
  updateScoreUi();

  localStorage.removeItem('scores');
  
  guess = '';
  headElement.classList.remove('selected');
  tailElement.classList.remove('selected');

  winMsg.classList.add('hidden');
  loseMsg.classList.add('hidden');
  winMsg.classList.remove('show-result');
  loseMsg.classList.remove('show-result');
});

// coin animation end eventListner
coinElement.addEventListener('animationend', () => { 
    showResult();
});

//info ToolTips eventlisteners
infoElement.addEventListener('mouseenter', () => {
    InfoToolTipElement.classList.remove('hidden');
    InfoToolTipElement.classList.add('info-tool-tip');

    console.log(resetToolTipElement)
});

infoElement.addEventListener('mouseleave', () => {
    InfoToolTipElement.classList.add('hidden');
    InfoToolTipElement.classList.remove('info-tool-tip');
});

// Reset tooltip
resetElement.addEventListener('mouseenter', () => {
  resetToolTipElement.classList.remove('hidden');
  resetToolTipElement.classList.add('reset-tool-tip');
});

resetElement.addEventListener('mouseleave', () => {
  resetToolTipElement.classList.add('hidden');
  resetToolTipElement.classList.remove('reset-tool-tip');
});