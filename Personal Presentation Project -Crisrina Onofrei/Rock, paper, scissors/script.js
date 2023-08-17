// Definirea functiei play
function play(userChoice) {
    // array cu cele 3 optiuni
    var options = ['rock', 'paper', 'scissors'];
  
    //  index random pentru alegerea calculatorului
    var computerIndex = Math.floor(Math.random() * options.length);
    var computerChoice = options[computerIndex];
  
    //  opțiunile alese de utilizator și calculator
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
  
    // Verificare rezultat si afisare mesaj corespunzător în functie de regulile jocului
    var resultMessage = '';
    if (userChoice === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = 'You win!';
    } else {
      resultMessage = 'Computer wins!';
    }
  
    // Afisarea rezultatului in elementul cu id-ul "result" din fisierul HTML
    var resultElement = document.getElementById('result');
    resultElement.innerText = resultMessage;
  }
  