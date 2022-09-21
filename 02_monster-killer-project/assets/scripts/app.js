const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHeath = chosenMaxLife;
let currentPlayerHeath = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHeath -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHeath -= playerDamage;
  if (currentMonsterHeath <= 0 && currentPlayerHeath > 0) {
    alert("You won! ⚔️");
  } else if (currentPlayerHeath <= 0 && monsterHealthBar < 0) {
    alert("You lost! 😭");
  } else if (currentPlayerHeath <= 0 && monsterHealthBar <= 0) {
    alert("You have a draw. 😵‍💫") 
  }
}

attackBtn.addEventListener('click', attackHandler);
