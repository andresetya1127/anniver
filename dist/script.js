onload = () => {
  const c = setTimeout(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play(); // Memutar lagu

    document.body.classList.remove("not-loaded");
    document.getElementById("anv").classList.remove("d-none");

    clearTimeout(c);
  }, 1000);
};
