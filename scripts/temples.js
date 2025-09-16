document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Change button symbol
  hamburger.textContent = navMenu.classList.contains("open") ? "X" : "☰";
});

