const fortuneButton = document.getElementById('fortune-button');
const fortunePaper = document.getElementById('fortune-paper');
const fortuneText = document.getElementById('fortune-text');
const widget = document.querySelector('.fortune-cookie-widget');

const fortunes = [
    'A sweet surprise is closer than you think.',
    'Good things grow when you give them time.',
    'Your next idea may be your best one yet.',
    'A kind message will brighten someone’s day.',
    'Take the small chance. It could lead somewhere lovely.',
    'You are allowed to be proud of your progress.'
];


let previousFortune = -1;
let resetTimer;

function resetFortune() {

    clearTimeout(resetTimer);

    widget.classList.remove('fortune-revealed');

    fortuneText.textContent = '';
}

// Runs whenever someone presses my "Click me" button.
function showFortune() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * fortunes.length);
    } while (fortunes.length > 1 && randomNumber === previousFortune);

    previousFortune = randomNumber;
    fortuneText.textContent = fortunes[randomNumber];

    widget.classList.add('fortune-revealed');

    clearTimeout(resetTimer);
    resetTimer = setTimeout(resetFortune, 6000);
}

fortuneButton.addEventListener('click', showFortune);
fortunePaper.addEventListener('click', resetFortune);
