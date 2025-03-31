document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    navLinksItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  });