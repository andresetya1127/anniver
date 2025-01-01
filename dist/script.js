onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.getElementById("anv").classList.remove("d-none");
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play(); // Memutar lagu
    clearTimeout(c);
  }, 1000);
};
