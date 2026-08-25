const girlfriendName = " Marti Farroohaa";
const imagePath = "me.her.png";

const stubbornYesText = "Silly 🙄, choose yes..";
const noClicksBeforeGiveUp = 5;
const loveMessage = `
Hi 2albii i wish you liked it ya roohii and it made your dayyy  ... i love you ya rez2a kteeeerr and i cant wait for us to be together in one house . bhibbik add ldinii killaa ya rez2aaaaa mwahhhh i wish to keep this QRcode with u and scan when ur sad ,(i wish u wont scan it another time..hehehhe)allah y5alleeli yeeki ya daw 3yoonii i cant live wiithout youu , i love you till the day i dieee mwahhhhhhh byeeeee :)ill always be your loving husband....🌸💙
`;

document.getElementById("name1").textContent = girlfriendName;
document.getElementById("name2").textContent = girlfriendName;
document.getElementById("photo").src = imagePath;
document.getElementById("letterText").textContent = loveMessage.trim();

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

document.querySelectorAll(".btn.yes").forEach(function (btn) {
  btn.addEventListener("click", function () {
    showScreen(btn.dataset.next);
  });
});

document.querySelectorAll(".no.runaway").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const range = 90;
    const x = Math.round((Math.random() - 0.5) * 2 * range);
    const y = Math.round((Math.random() - 0.5) * 2 * range);

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");

    btn.classList.remove("wobble");
    void btn.offsetWidth;
    btn.classList.add("wobble");
  });
});

let noCount = 0;
const finalNo = document.getElementById("finalNo");
const finalYes = document.getElementById("finalYes");

finalNo.addEventListener("click", function () {
  noCount++;

  finalYes.style.setProperty("--grow", 1 + noCount * 0.15);
  finalYes.classList.remove("pop");
  void finalYes.offsetWidth;
  finalYes.classList.add("pop");

  if (noCount >= noClicksBeforeGiveUp) {
    finalNo.classList.add("gone");
    finalYes.textContent = stubbornYesText;
    finalYes.classList.add("huge");
  }
});

document.getElementById("envelope").addEventListener("click", function () {
  this.classList.add("open");
  setTimeout(function () {
    showScreen("screen5");
  }, 1800);
});

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play().catch(function () {
    });
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
