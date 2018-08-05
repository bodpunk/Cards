var arrCards = ["0C", "0D", "0H", "0S", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "AC", "AD", "AH", "AS", "JC", "JD", "JH", "JS", "KC", "KD", "KH", "KS", "QC", "QD", "QH", "QS"];

$(".start-button").click(function() {
  $(".start-screen").addClass("non-visible");
  $(".main-screen").removeClass("non-visible");
});

$(document).ready(function() {
  for (var i = 0; i < 9; i++) {
    var rand = Math.floor(Math.random() * arrCards.length);
    var x = arrCards[rand];
    $(".main-screen__cards").append('<img class="cards__item" src="img/' + x + '.png" width="226" height="314">');
    $(".main-screen__cards").append('<img class="cards__item" src="img/' + x + '.png" width="226" height="314">');
    arrCards.splice(rand, 1);
  };
  var parent = $(".main-screen__cards");
  var imgItems = parent.children();
  while (imgItems.length) {
      parent.append(imgItems.splice(Math.floor(Math.random() * imgItems.length), 1)[0]);
  }
});

$(".nav__start-again").click(function() {
  var arrCardsAgain = arrCards.slice();
  $(".cards__item").remove();
  for (var i = 0; i < 9; i++) {
    var rand = Math.floor(Math.random() * arrCardsAgain.length);
    var x = arrCardsAgain[rand];
    $(".main-screen__cards").append('<img class="cards__item" src="img/' + x + '.png" width="226" height="314">');
    $(".main-screen__cards").append('<img class="cards__item" src="img/' + x + '.png" width="226" height="314">');
    arrCardsAgain.splice(rand, 1);
  };
  var parent = $(".main-screen__cards");
  var imgItems = parent.children();
  while (imgItems.length) {
      parent.append(imgItems.splice(Math.floor(Math.random() * imgItems.length), 1)[0]);
  };
});
