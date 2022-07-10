const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let gameOver = false;

p1Button.addEventListener('click', function(){
    if(!gameOver){
        p1Score+=1;
        if(p1Score === winScore){
            gameOver = true;
            p1Display.classList.add('Winner');
            p2Display.classList.add('Loser');

        }
    p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function(){
    if(!gameOver){
        p2Score+=1;
        if(p2Score === winScore){
            gameOver = true;
            p2Display.classList.add('Winner');
            p1Display.classList.add('Loser');
        }
    p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change',function(){
    winScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){    
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('Winner','Loser');
    p2Display.classList.remove('Winner','Loser');
}