// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийн 1 гэе.

var activePlayer = 1;

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

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";

  diceDom.src = "dice-" + diceNumber + ".png";
});
