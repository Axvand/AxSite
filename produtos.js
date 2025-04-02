let cardsConteiner = document.querySelectorAll(".cards-container"); //conteiners

function LogicaDeProdutos() {
  let panfletos; //variável chave do fetch
  let windbanners; //variável chave do fetch
  //fetch do json
  fetch("panfletos.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      panfletos = res.panfletos;
      // windbanners= res.windbnanners;   <== Pronto! Só aguardando o json
      LogProd(panfletos); // chamada da função pela limitação do escopo;
    });

  let select = document.querySelectorAll(".select"); // Para ativar a função "change"

  //criação de cardes, Setando e atualizando valores
  function LogProd(dadosPanfletos, dadosWindbanners) {
    for (let x = 0; x < dadosPanfletos.length; x++) {
      const card = document.createElement("div");
      cardsConteiner[0].appendChild(card);
      card.innerHTML = `
      <div class="card">
        <div class="image-placeholder">Imagem</div>
        <h3>${dadosPanfletos[x].nome}</h3>
        <p>
          Descrição do produto vai aqui. Uma breve descrição sobre o que é
          e suas características.
        </p>
        <select class="select">
          <option value="100">Unidade: ${dadosPanfletos[x].unidade_1}</option>
          <option value="200">Unidade: ${dadosPanfletos[x].unidade_2}</option>
          <option value="300">Unidade: ${dadosPanfletos[x].unidade_3}</option>
          <option value="400">Unidade: ${dadosPanfletos[x].unidade_4}</option>
        </select>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          style="text-decoration: none"
          >Comprar R$<span class="valor">${dadosPanfletos[x].valor_inicial}</span></a>
      </div> `;
    }

    //Independente de qualquer merda isso vai funcionar!
    let valor = document.querySelectorAll(".valor");
    let select = document.querySelectorAll(".select");

    for (let x = 0; x < valor.length; x++) {
      select[x].addEventListener("change", () => {
        //chamada do "select"
        valor[x].innerHTML = select[x].value * dados[x].multiplicador;
      });
    }
  }
  LogProd();
}

export default LogicaDeProdutos;

// document.querySelector(".cards-container").innerHTML = `
// <div class="card">
//   <div class="image-placeholder">Imagem</div>
//   <h3>Nome do Produto</h3>
//   <p>
//     Descrição do produto vai aqui. Uma breve descrição sobre o que é
//     e suas características.
//   </p>
//   <select class="select">
//     <option value="100">Unidade 100</option>
//     <option value="200">Unidade 200</option>
//     <option value="300">Unidade 300</option>
//     <option value="400">Unidade 400</option>
//   </select>
//   <a
//     href="https://wa.me/5500000000000"
//     target="_blank"
//     style="text-decoration: none"
//     >Comprar R$<span class="valor">70,00</span></a
//   >
// </div> `;
