document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Change button symbol
  hamburger.textContent = navMenu.classList.contains("open") ? "X" : "☰";
});

