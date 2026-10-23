
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseModal = document.getElementById("surpriseModal");
const closeModal = document.getElementById("closeModal");
const confettiBtn = document.getElementById("confettiBtn");

function openSurprise() {
  surpriseModal.classList.add("show");
  surpriseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeModal.focus();
  createConfetti();
}

function closeSurprise() {
  surpriseModal.classList.remove("show");
  surpriseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  surpriseBtn.focus();
}

surpriseBtn.addEventListener("click", openSurprise);
closeModal.addEventListener("click", closeSurprise);

surpriseModal.addEventListener("click", (event) => {
  if (event.target === surpriseModal) {
    closeSurprise();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && surpriseModal.classList.contains("show")) {
    closeSurprise();
  }
});

confettiBtn.addEventListener("click", createConfetti);

function createConfetti() {
  const symbols = ["💗", "💕", "💖", "✨", "🎀", "❤️"];

  for (let i = 0; i < 35; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (14 + Math.random() * 20) + "px";
    piece.style.animationDuration = (2 + Math.random() * 2.5) + "s";
    piece.style.animationDelay = Math.random() * 0.7 + "s";

    document.body.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }
}
