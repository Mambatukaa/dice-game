// Глобал хувьсагчдыг зарлах хэсэг энд байна

//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Идэвхтэй тоглогч
var activePlayer;

//  Хоёр тоглогчийн цуглуулсан оноо
var scores;

//  Идэвхтэй тоглогчийн цуглуулж буй оноо
var roundScore;

// Шооны зургийг үзүүлэх элемент
var diceDom = document.querySelector(".dice");

// Тоглоомын эхлүүлэх функц
initGame();

function initGame() {
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийн 1 гэе.
  // Тоглоом эхэллээ төлөвт оруулах.
  isNewGame = true;
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

  scores = [0, 0];

  // Тоглогчийн ээлжин дээр цуглуулж байгааг хадгалах хувьсагч

  roundScore = 0;

  // Програм эхлэхэд бэлтгэх

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцаах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  //player-1-panel

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Шоог шидэх eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    //1-6 хүртэлх тоог санамсаргүй тоог гаргаж ирнэ
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг гаргаж ирнэ
    diceDom.style.display = "block";
    // Буусан тооны зургийг гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

    if (diceNumber !== 1) {
      // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнөө.
      roundScore = roundScore + diceNumber;

      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      SwtichToNextPlayer();
    }
  }
});

// Hold товчины eventListener class ийн цэг мартахгүй байх
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Уг тоглогчийн оноог дээш нь оруулах
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // <div class="player-score" id="score-1">72</div> Дэлгэц дээр оноог нь өөрчилнө

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Ээлжийн оноог нь 0 болгоно

    // Уг тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 10) {
      // Тоглоомыг дууссан төлөвт оруулна
      isNewGame = false;
      // Ялагч гэсэн текстийг нэрний оронд ойлгоно
      document.getElementById("name-" + activePlayer).innerHTML = "WInner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      alert("Game over");
    } else {
      // Тоглогчийн ээлжийг сольно

      SwtichToNextPlayer();
    }
  }
});

// Дараагийн тоглогч руу сольдог функц
function SwtichToNextPlayer() {
  // 1 буусан тул тоглогчийн ээлжийг сольж өгнө
  // Энэ тоглогчийн цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ

  // Хэрэв идэвхтэй тоглогч нь 0 байвал 1 болгоно
  // Үгүй бол идэвхтэй тоглогчийг 0 болгоно

  //if нь асуултын тэмдэг else нь : гэж бичнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх toggle function байхгүй бол нэмнэ байвал хасна
  document.querySelector(".player-0-panel").classList.toggle("active");

  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}

// New Game товчлуурын ЭвентЛистенер  <button class="btn-hold">
document.querySelector(".btn-new").addEventListener("click", initGame);
