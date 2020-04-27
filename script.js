const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById("final-message-reveal-word");

const words = ["application", "programming", "interface", "wizard"];
const selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
    .split("")
    .map((letter) => `<span class="letter">${correctLetters.includes(letter) ? letter : ""}</span>`)
    .join("")}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "おめでとうございます！あなたの勝ちです😃";
    popup.style.display = "flex";
  }
}

displayWord();
