// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0 хоёрдугаар тоглогчийн 1 гэе.

var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var score = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгааг хадгалах хувьсагч

var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө

var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = dice;

// Програм эхлэхэд бэлтгэх

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";

document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
