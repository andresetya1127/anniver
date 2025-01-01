onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.getElementById("anv").classList.remove("d-none");

    clearTimeout(c);
  }, 1000);
};
