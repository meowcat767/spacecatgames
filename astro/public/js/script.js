/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

document
  .getElementById("anime-mode-toggle")
  .addEventListener("click", function () {
    const body = document.body;
    const audio = document.getElementById("nightcore-audio");
    const animeImages = [
      "anime/background1.gif",
      "anime/background2.gif",
      "anime/background3.gif",
      "anime/background4.gif",
    ]; // images
    let currentImageIndex = parseInt(body.dataset.currentImageIndex || "0", 10);
    const isAnimeMode = body.classList.toggle("anime-mode");

    if (isAnimeMode) {
      currentImageIndex = (currentImageIndex + 1) % animeImages.length;
      body.style.backgroundImage = `url('${animeImages[currentImageIndex]}')`;
      body.style.backgroundPosition = "center";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundSize = "cover";
      body.style.animation = "none"; // Stop background animation
      audio.play();
    } else {
      body.style.backgroundImage = "";
      body.style.animation = ""; // Resume background animation
      audio.pause();
    }

    body.dataset.currentImageIndex = currentImageIndex;
  });
