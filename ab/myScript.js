var butt = document.getElementById("full-screen");

butt.addEventListener("click", function() {
  toggleFullScreen();
});


function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

setTimeout(function () {   window.scrollTo(0, 1); }, 1000);