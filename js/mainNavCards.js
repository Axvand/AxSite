export default function NavCards() {
  const option = document.querySelectorAll(".option");
  const cardsConteiner = document.querySelectorAll(".cardsConteiner");
  let tituloCard = document.querySelector(".tituloCard");
  console.log(option, cardsConteiner);

  //================================================
  option[0].addEventListener("click", () => {
    //Controle de sessão:
    cardsConteiner[0].style.display = "flex";
    let number = 0;

    for (let x = 0; x < cardsConteiner.length; x++) {
      if (x != number) {
        cardsConteiner[x].style.display = "none";
      }
    }
    //Controle de titulo:
    tituloCard.innerHTML = "Panfletos Diversos e Folders";

    //Controle de animação
  });

  //================================================
  option[1].addEventListener("click", () => {
    cardsConteiner[1].style.display = "flex";
    let number = 1;

    //Controle de sessão:
    for (let x = 0; x < cardsConteiner.length; x++) {
      if (x != number) {
        cardsConteiner[x].style.display = "none";
      }
    }
    //Controle de titulo:
    tituloCard.innerHTML = "Banners e Faixas";

    //Controle de animação
  });

  //=================================================
  option[2].addEventListener("click", () => {
    cardsConteiner[2].style.display = "flex";
    let number = 2;

    //Controle de sessão:
    for (let x = 0; x < cardsConteiner.length; x++) {
      if (x != number) {
        cardsConteiner[x].style.display = "none";
      }
    }
    //////////////////////////////////
    //Controle de titulo:
    tituloCard.innerHTML = "Windbanners e Cavaletes";

    //Controle de animação
  });

  //===================================================
  option[3].addEventListener("click", () => {
    cardsConteiner[3].style.display = "flex";
    let number = 3;

    //Controle de sessão:
    for (let x = 0; x < cardsConteiner.length; x++) {
      if (x != number) {
        cardsConteiner[x].style.display = "none";
      }
    }
    //Controle de titulo:
    tituloCard.innerHTML = "Cartão de Visita e Cardápios";

    //Controle de animação:
  });
}
