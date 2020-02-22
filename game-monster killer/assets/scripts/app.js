const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxdamage;
  if (mode === "ATTACK") {
    maxdamage = ATTACK_VALUE;
  } else {
    maxdamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxdamage);
  currentMonsterHealth -= damage;
  endRound();
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You win!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You cannot heal anymore");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
