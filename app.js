// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийн 1 гэе.

var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var score = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгааг хадгалах хувьсагч

var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө

// Програм эхлэхэд бэлтгэх

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
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

    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
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
});
