// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const text_box = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
  let voices = [];

  function populateVoiceList() {
      voices = speechSynthesis.getVoices();
      voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>'; 
      voices.forEach((voice) => {
          const option = document.createElement('option');
          option.textContent = `${voice.name} (${voice.lang})`;
          option.value = voice.name;
          voiceSelect.appendChild(option);
      });
  }

  function speakText() {
      if (voiceSelect.value !== 'select' && text_box.value.trim() !== '') {
          const utterance = new SpeechSynthesisUtterance(text_box.value);
          const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
          utterance.voice = selectedVoice;

          faceImage.src = 'assets/images/smiling-open.png';

          utterance.onend = function () {
              faceImage.src = 'assets/images/smiling.png'; 
          };

          speechSynthesis.speak(utterance);
      }
  }

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

  populateVoiceList(); 

  speakButton.addEventListener('click', speakText);
}

