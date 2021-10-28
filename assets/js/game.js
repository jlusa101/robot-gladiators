// User attributes
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Enemy's attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Checking enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
        enemyHealth = 50;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Checking player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        playerHealth = 100;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();