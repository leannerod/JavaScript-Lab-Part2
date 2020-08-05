let playerName;

const startGame = () => {
  let wantToPlay = prompt(
    "Would you like to play the game with the Almighty Grant?"
  );
  if (wantToPlay === "yes") {
    playerName = prompt("What is your character name?");
    startCombat();
  } else {
    alert("Okay bye");
  }
};

const startCombat = () => {
  let userHealthPoints = 40;
  let grantHealthPoints = 10;
  let defeat = 0;
  let win;
  let getDamage = () => Math.floor(Math.random() * 5) + 1;
  while (userHealthPoints > 0 && defeat < 3) {
    let choice = prompt(`Would you like to attack or quit?`);
    if (choice === `attack`) {
      grantHealthPoints = grantHealthPoints - getDamage();
      userHealthPoints = userHealthPoints - getDamage();
      console.log(`${playerName} has ${userHealthPoints} health points.`);
      console.log(`The Almighty Grant has ${grantHealthPoints} health points`);
      while (grantHealthPoints <= 0) {
        defeat++;
        console.log(`${playerName} has won round ${defeat}`);
        grantHealthPoints = 10;
        if (defeat === 3 && userHealthPoints > 0) {
          console.log(`${playerName} has won the game!`);
          break;
        } else if (
          userHealthPoints <= 0 &&
          defeat < 3 &&
          grantHealthPoints > 3
        ) {
          console.log("The Almighty Grant has won the game!");
          break;
        }
      }
    } else if (choice === `quit`) {
      console.log(`Thank you for playing.`);
      break;
    }
  }
};

console.log(startGame());
