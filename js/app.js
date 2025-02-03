let userScore = 0;
let compScore = 0;

const userScoreElement = document.querySelector('.count-user');
const compScoreElement = document.querySelector('.count-comp');
const resultText = document.querySelector('.result');


document.querySelector('.user-field .rock').addEventListener('click', () => playRound('камень'));
document.querySelector('.user-field .scissors').addEventListener('click', () => playRound('ножницы'));
document.querySelector('.user-field .paper').addEventListener('click', () => playRound('бумага'));

function playRound(userChoice) {
    const choices = ['камень', 'ножницы', 'бумага'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === compChoice) {
        resultText.textContent = `Ничья! Вы выбрали ${capitalizeFirstLetter(userChoice)}, а компьютер выбрал ${capitalizeFirstLetter(compChoice)}.`;
    } else if (
        (userChoice === 'камень' && compChoice === 'ножницы') ||
        (userChoice === 'ножницы' && compChoice === 'бумага') ||
        (userChoice === 'бумага' && compChoice === 'камень')
    ) {
        userScore++;
        resultText.textContent = `Вы выиграли! ${capitalizeFirstLetter(userChoice)} побеждает ${capitalizeFirstLetter(compChoice)}.`;
    } else {
        compScore++;
        resultText.textContent = `Компьютер выиграл! ${capitalizeFirstLetter(compChoice)} побеждает ${capitalizeFirstLetter(userChoice)}.`;
    }

    updateScores();
}

function updateScores() {
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}