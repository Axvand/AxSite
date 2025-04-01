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

// =======================================
let select = document.querySelectorAll(".select");
let valor = document.querySelector(".valor").innerHTML.replace(",", ".");

let panfletos;

fetch("panfletos.json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((res) => {
    panfletos = res;
    LogProd(panfletos);
  });

function LogProd(dados) {
  let valor = document.querySelectorAll(".valor");
  let select = document.querySelectorAll(".select");
  for (let x = 0; x < valor.length; x++) {
    select[x].addEventListener("change", () => {
      valor[x].innerHTML = select[x].value * dados[x].multiplicador;
    });
  }
}
LogProd();
