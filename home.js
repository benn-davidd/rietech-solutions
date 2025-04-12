// FIRST-HOME
// typing text effect

const phrases = [
  "Innovation and Creativity ",
  "Client-Centric Solutions ",
  "Integrity and Transparency ",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function typeloop() {
  const typingText = document.getElementById("typing-text");
  typingText.innerHTML = currentPhrase.join("");
  typingText.style.color = "black";

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }
    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }
    if (j === phrases[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(typeloop, 800);
      return;
    }
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i = (i + 1) % phrases.length;
      if (i === phrases.length) {
        i = 0; //loops back to first phase
      }
    }
  }

  const speed = isDeleting ? 25 : 30;
  setTimeout(typeloop, speed);
}

typeloop();

// HOME-SERVICES
