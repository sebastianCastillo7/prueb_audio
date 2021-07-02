const btnAudio = document.getElementById('audio_play');
const audio = document.getElementById('main_audio');
const myAudio = new Audio('/media/present_day3.mp3');
myAudio.addEventListener('canplay', function () {
  btnAudio.onclick = function () {
    myAudio.play();
  };
});
