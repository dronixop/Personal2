function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  // Play music
  const music = document.getElementById("bg-music");
  music.play();

  // Start slideshow
  startSlideshow();

  // Start floating hearts
  setInterval(createHeart, 300);

  // Show typing paragraph
  typeLoveText("Happy 2nd month anniversary bebuuu❤️❤️ They say Distance kills love but i have never saw anything this beautiful from this distance❤️ never listen anything sweeter than your voice❤️ never felt warmth like your love❤️ we very far but you always very close to me🥺🥺❤️..Sorry for being this immature and this forgetfull😖😖 but that doesnt means i dont love you😭. its just we having very tensed somedays and make many mistakes bacause i hurt😭😭 when i make you sad...i have never done much for you and im scared if its too simple you wont like me 😭😢😢but i truly truly sorry i love you always bebb always❤️❤️");
}

// Slideshow
let slideIndex = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");

  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;

  setTimeout(startSlideshow, 2000); // 2 sec per slide
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (30 + Math.random() * 40) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Typing effect for paragraph
function typeLoveText(text) {
  const el = document.getElementById("love-text");
  el.classList.remove("hidden");
  let i = 0;
  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
}
