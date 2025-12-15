let heartInterval;

// PASSWORD
function checkPassword() {
  const password = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (password === "january 7") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    createHearts();
    showMessages();
  } else {
    error.textContent = "Wrong password 😅 try again";
  }
}

// HEARTS
function createHearts() {
  const container = document.querySelector(".main-bg");

  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 300);
}

// MESSAGES
function showMessages() {
  const msg1 = document.getElementById("message-one");
  const msg2 = document.getElementById("message-two");
  const nav = document.getElementById("nav-bar");
  const love = document.getElementById("love-letter");

  msg1.classList.remove("hidden");
  msg1.classList.add("show");

  setTimeout(() => {
    msg1.classList.remove("show");

    setTimeout(() => {
      msg1.classList.add("hidden");
      msg2.classList.remove("hidden");
      msg2.classList.add("show");

      setTimeout(() => {
        msg2.classList.remove("show");

        setTimeout(() => {
          msg2.classList.add("hidden");
          nav.classList.remove("hidden");
          love.classList.remove("hidden");
          love.classList.add("show");
        }, 1500);

      }, 5000);
    }, 1500);
  }, 5000);
}

// NAV + MUSIC
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".top-nav button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      sections.forEach(sec => {
        sec.classList.toggle("show", sec.id === target);
        sec.classList.toggle("hidden", sec.id !== target);
      });
    });
  });

  setupMusic();
});

function setupMusic() {
  const songs = document.querySelectorAll(".song");

  songs.forEach(song => {
    const btn = song.querySelector(".play-btn");
    const audio = song.querySelector("audio");

    btn.addEventListener("click", () => {
      songs.forEach(other => {
        const a = other.querySelector("audio");
        const b = other.querySelector(".play-btn");
        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
          b.textContent = "▶ Play";
          b.classList.remove("playing");
        }
      });

      if (audio.paused) {
        audio.play();
        btn.textContent = "⏸ Pause";
        btn.classList.add("playing");
      } else {
        audio.pause();
        btn.textContent = "▶ Play";
        btn.classList.remove("playing");
      }
    });

    audio.addEventListener("ended", () => {
      btn.textContent = "▶ Play";
      btn.classList.remove("playing");
    });
  });
}
