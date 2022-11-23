const myAudio = document.getElementById("my-audio");
const playBtn = document.getElementById("play-btn");
const timerProgress = document.getElementById("timer-progress");

function play() {
  if (myAudio.paused) {
    myAudio.play();
    playBtn.classList.add("icon-pause");
    playBtn.classList.remove("icon-play");
  } else {
    myAudio.pause();
    playBtn.classList.add("icon-play");
    playBtn.classList.remove("icon-pause");
  }
}
if (myAudio.ended) {
  console.log("ended");
}

function removeProgress() {
  timerProgress.classList.forEach((item) => {
    if (item.startsWith("progress")) {
      timerProgress.classList.remove(item);
    }
  });
}
const update = setInterval(function () {
  let secs = Math.floor(myAudio.currentTime * 1000);
  let duration = Math.floor(myAudio.duration * 1000);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  let pct = (100 * secs) / duration;
  removeProgress();
  timerProgress.classList.add("progress-" + pct.toFixed(0));
}, 10);

myAudio.onended = () => {
  playBtn.classList.add("icon-play");
  playBtn.classList.remove("icon-pause");
};