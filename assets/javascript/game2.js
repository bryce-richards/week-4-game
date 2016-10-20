/*
The player will keep hitting the attack button in an effort to defeat their opponent.

When the defender"s HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

The player wins the game by defeating all enemy characters. The player loses the game the game if their character"s HP falls to zero or below.

Game design notes:

Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

Each time the player attacks, their character"s Attack Power increases by its base Attack Power.

For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
The enemy character only has Counter Attack Power.
Unlike the player"s Attack Points, Counter Attack Power never changes.

The Health Points, Attack Power and Counter Attack Power of each character must differ.

No characters in the game can heal or recover Health Points.
A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.

Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.
*/

$(document).ready(function() {
// $( "span" ).each(function(i, item){
//
// 	switch (i) {
// 		case 0:
// 			$(this).text("150");
// 			break;
// 		case 1:
// 		 $(this).text("140");
// 			break;
// 		default:
//
// 	}

});
var fighterSelectd = false;
var enemySelected = false;
var defenderDefeated = false;

var characters = [
	$("#gimli.character").data({
    name: "Gimli",
		health: 150,
		attack: 10,
    counterAttack: 45,
    image: "<img src='assets/images/gimli.jpg'>"
	}),
  $("#arwen.character").data({
    name: "Arwen",
		health: 140,
		attack: 12,
    counterAttack: 50,
    image: "<img src='assets/images/arwen.jpg'>"
	}),
  $("#gothmog.character").data({
    name: "Gothmog",
    health: 180,
    attack: 8,
    counterAttack: 30,
    image: "<img src='assets/images/gothmog.jpg'>"
  }),
  $("#lurtz.character").data({
    name: "Lurtz",
    health: 160,
    attack: 10,
    counterAttack: 40,
    image: "<img src='assets/images/lurtz.jpg'>"
  }),
];

// var fighterDiv = $("<div>");
// var defenderDiv = $("<div>");

// function Character(name, health, attack, counter) {
//   this.name = name;
//   this.healthPoints = health;
//   this.attackPower = attack;
//   this.counterAttackPower = counter;
// }

$(".character").on("click", function() {
	var $currentCharacter = $(this);
  var data = $currentCharacter.data();
  console.log(data);
	$( "span:first" ).text(data.health);
  //$currentCharacter.find(".health").text(data.health);
  // $("#output").html(
  // 		"<h1>Name: " + characterData.name +"</h1>" +
  //     	"<h2>Attack: " + characterData.attack +"</h2>"
  // );

  var healthOriginal = data.health;
  var healthCurrent = data.health - 50;
  var healthPercent = ((1-(healthCurrent / healthOriginal)) * 100);
    $currentCharacter.find("img").css({filter:"grayscale("+ healthPercent + "%"});

    console.log(healthPercent);
  });

// $(".character").on("click", function(){
//   console.log(this);
//   $("#fighterarea").append(this);
//   for (var j = 0; j < characters.length; j++) {
//     if (this.name == characters[i].name) {
//       console.log(this);
//       fighterDiv = this.contents();
//       $("#fighterarea").append(figherDiv);
//     }
//   }


});