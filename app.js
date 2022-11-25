console.log('hi');







const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
}


const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'paper';
            break;
        case 1:
            return 'rock';
            break;
        case 2:
            return 'scissors';
            break;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game was Tie!';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'You Lost!';
    }


    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'You Won!';
    }

    if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'You Won!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'You Lost!';
    }

    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'You Won!';
    }

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'You Lost!';
    }
}


const playGame = () => {
    //PUT YOUR CHOICE IN THE getUserChoice GOOD LUCK!
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`Me: ${userChoice} computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}


playGame();
