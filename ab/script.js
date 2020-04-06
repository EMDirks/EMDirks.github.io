var butt = document.getElementById("full-screen");

butt.addEventListener("click", function() {
	alert("full screen enabled");
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