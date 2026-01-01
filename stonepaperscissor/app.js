const choices = ['rock', 'paper', 'scissors'];
const icons = {
    rock: '',
    paper: '',
    scissors: ''
};

let playerScore = 0;
let computerScore = 0;

const choicesContainer = document.getElementById('choices-container');
const battleGround = document.getElementById('battle-ground');
const statusText = document.getElementById('status-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerIconEl = document.getElementById('player-picked-icon');
const computerIconEl = document.getElementById('computer-picked-icon');
const nextBtn = document.getElementById('next-round');
const resetBtn = document.getElementById('reset-game');

const choiceBtns = document.querySelectorAll('.choice-btn');

choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.dataset.choice;
        playRound(playerChoice);
    });
});

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    choicesContainer.classList.add('hidden');
    battleGround.classList.remove('hidden');
    
    playerIconEl.textContent = icons[playerChoice];
    computerIconEl.textContent = icons[computerChoice];
    
    const result = getResult(playerChoice, computerChoice);
    updateScore(result);
    displayResult(result, playerChoice, computerChoice);
    
    nextBtn.classList.remove('hidden');
}

function getResult(player, computer) {
    if (player === computer) return 'draw';
    
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    
    return 'loss';
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (result === 'loss') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

function displayResult(result, player, computer) {
    if (result === 'win') {
        statusText.textContent = `You Win! ${capitalize(player)} beats ${capitalize(computer)}`;
        statusText.style.color = '#4ade80';
    } else if (result === 'loss') {
        statusText.textContent = `You Lose! ${capitalize(computer)} beats ${capitalize(player)}`;
        statusText.style.color = '#f87171';
    } else {
        statusText.textContent = "It's a Draw!";
        statusText.style.color = '#94a3b8';
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

nextBtn.addEventListener('click', () => {
    choicesContainer.classList.remove('hidden');
    battleGround.classList.add('hidden');
    nextBtn.classList.add('hidden');
    statusText.textContent = 'Choose your weapon';
    statusText.style.color = '#f8fafc';
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    statusText.textContent = 'Score Reset! Choose your weapon';
    statusText.style.color = '#f8fafc';
    
    choicesContainer.classList.remove('hidden');
    battleGround.classList.add('hidden');
    nextBtn.classList.add('hidden');
});