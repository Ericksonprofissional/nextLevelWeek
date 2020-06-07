const cards = document.querySelector(".cards");
let card = document.createElement("div");
let title = document.createElement("h1");
let categoria = document.createElement("h3");
let descricao = document.createElement("p");

card.classList.add("card");
cards.appendChild(card)
card.appendChild(title)
card.appendChild(categoria)
card.appendChild(descricao)