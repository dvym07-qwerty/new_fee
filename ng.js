let secret= Math.floor(Math.random() * 100) + 1;
let attempts=0;
let gameOver=false;
window.onload = function(){
    document.getElementById('guess').addEventListener('keydown',function(e){
    if (e.key==='Enter') checkGuess();
});  
}                                          
function checkGuess(){
    if (gameOver) return;
    let input=document.getElementById("guess");
    let message=document.getElementById("message");
    let attemptsp=document.getElementById("attempts");
    let hint=document.getElementById("hint");

    const guess = parseInt(input.value);
    if(isNaN(guess) || guess < 1 || guess>100){
        message.textContent ="Please Enter a Number Between 1 and 100";
        return;
    }
    attempts++;
    input.value = '';

    if(guess < secret){
        message.textContent="Too low Guess, GUESS HIGHER ! !";
        hint.textContent = `Hint: number is between ${guess} and 100`;
        document.getElementById('wrongSound').currentTime=0;
        document.getElementById('wrongSound').play()
    }
    else if(guess > secret){
        message.textContent=" Too high Guess, GUESS LOWER ! !";
        hint.textContent = `Hint: number is between 1 and ${guess}`;
        document.getElementById('wrongSound').currentTime=0;
        document.getElementById('wrongSound').play()

    }
    else{
        message.textContent="Correct Guess ! !"
        hint.textContent = '';
        gameOver= true;
        document.getElementById('right').currentTime=0;
        document.getElementById('right').play();
    }
    attemptsp.textContent=`Attempts: ${attempts}`;
    
}
function resetGame() {
  secret = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('hint').textContent = '';
}
