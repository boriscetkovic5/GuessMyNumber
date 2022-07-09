'use strict';

let secretNumber = Math.floor(Math.random() *20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Please enter a number');
    
    
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    } else if(guess !== secretNumber) {

        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game over');
            document.querySelector('.score').textContent = '0';
        }
        
    
    }
    
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.floor(Math.random() *20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
});