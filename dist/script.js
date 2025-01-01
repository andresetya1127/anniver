onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play(); // Memutar lagu
    clearTimeout(c);
  }, 1000);
};
