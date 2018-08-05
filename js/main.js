// добавляем массив с перечнем id карт, на подумать - добавление двумерного массива 13х4
var arrCards = ["0C", "0D", "0H", "0S", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "AC", "AD", "AH", "AS", "JC", "JD", "JH", "JS", "KC", "KD", "KH", "KS", "QC", "QD", "QH", "QS"];

var points = 0;

// переход со стартового экрана на основной
$(".start-button").click(function() {
  $(".start-screen").addClass("non-visible");
  $(".main-screen").removeClass("non-visible");
});

// задаем функцию на перемешивание карт
function cardRandomizer() {
  var arrCardsAgain = arrCards.slice(); // создаем копию массива для функции
  $(".cards__flip-container").remove(); //если в html уже есть карты - удаляем
  // цикл на добавление 9 пар рандомных карт
  for (var i = 0; i < 9; i++) {
    var rand = Math.floor(Math.random() * arrCardsAgain.length);
    var x = arrCardsAgain[rand]; //собственно, х - id рандомной карты
    // мини цикл для добавления карты дважды (нам нужны пары) + рубашка
    for (var z = 0; z < 2; z++) {
      $(".main-screen__cards").append('<div class="cards__flip-container"><div class="flipper"><img class="cards__item cards__item--back" src="img/cards-back.png" width="200" height="278"><img class="cards__item cards__item--front" src="img/' + x + '.png" width="226" height="314"></div></div>');
    };
    arrCardsAgain.splice(rand, 1); // удаляем из массива в цикле добавленную карту для избежания повторного добавления
  };
  // цикл на перемешивание карт в родителе
  var parent = $(".main-screen__cards");
  var imgItems = parent.children();
  while (imgItems.length) {
      parent.append(imgItems.splice(Math.floor(Math.random() * imgItems.length), 1)[0]);
  };
  $(".cards__flip-container").toggleClass("selected");
  setTimeout(function() {
    $(".cards__flip-container").toggleClass("selected");
  }, 5000);
  points = 0;
  $(".nav__points--number").text(points)
};

$(document).ready(cardRandomizer); // вызываем функцию перемешивания на первый запуск

$(".main-screen__cards").on('click', '.cards__flip-container', function() {
  if ($(this).hasClass("selected") || $(this).hasClass("selected--done") || $(".selected").length == 2) {
  }
  else {
    $(this).addClass("selected");
    if ($(".selected").length == 2) {
      if ($(".selected:eq(0) img.cards__item--front").attr("src") == $(".selected:eq(1) img.cards__item--front").attr("src")) {
        setTimeout(function() {
          $(".selected").addClass("selected--done");
          $(".selected").css("visibility", "hidden")
        }, 400);
        setTimeout(function() {
          $(".selected").removeClass("selected");
          if ($(".selected--done").length == 18) {
            $(".main-screen").addClass("non-visible");
            $(".last-screen").removeClass("non-visible")
          }
        }, 1000);
        points += (9 - $(".selected--done").length/2) * 42;
      } else {
        setTimeout(function() {
          $(".selected").removeClass("selected")
        }, 1000);
        points -= $(".selected--done").length * 21;
      };
      $(".nav__points--number").text(points);
      $(".hooray__number").text(points)
    }
  };
});

$(".nav__start-again").click(cardRandomizer); // вызываем функцию перемешивания на нажатие "Начать заново"

$(".again-button").click(cardRandomizer);

$(".again-button").click(function() {
  $(".last-screen").addClass("non-visible");
  $(".main-screen").removeClass("non-visible")
});
