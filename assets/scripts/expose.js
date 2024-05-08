// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_type = document.getElementById('horn-select');
  const images = document.querySelector('#expose img');
  const audios = document.querySelector('#expose audio');
  const playButton = document.querySelector('#expose button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();


  const hornAssets = {
    "air-horn": {
      image: "assets/images/air-horn.svg",
      audio: "assets/audio/air-horn.mp3"
    },
    "car-horn": {
      image: "assets/images/car-horn.svg",
      audio: "assets/audio/car-horn.mp3"
    },
    "party-horn": {
      image: "assets/images/party-horn.svg",
      audio: "assets/audio/party-horn.mp3"
    }
  };


  horn_type.addEventListener('change', () => {
    const selectedHorn = horn_type.value;

    if (hornAssets[selectedHorn]) {
      images.src = hornAssets[selectedHorn].image;
      audios.src = hornAssets[selectedHorn].audio;
    } else {
      images.src = "assets/images/no-image.png";
      audios.src = "";
    }
  });

  playButton.addEventListener('click', () => {
    audios.play().catch(e => console.error("Error playing the sound:", e));
    if (horn_type.value === 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🟨', '🟥', '🟦', '🟧', '🟪'],
        emojiSize: 50,
        confettiNumber: 300
      });
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = parseInt(volumeSlider.value, 10);

    audios.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
}
