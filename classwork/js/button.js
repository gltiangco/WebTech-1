document.getElementById("play").onclick = function() {
  if (document.getElementById("video").paused) {
    document.getElementById("video").play();
    this.innerHTML = "Pause";
  } else {
    document.getElementById("video").pause();
    this.innerHTML = "Play";
  }
};
