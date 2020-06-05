document.querySelector("select[name=uf]")
    .addEventListener("change", getCities);


function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.sigla}</option>`;
            }
        })
}

function getCities(event) {
    const citiesSelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");
    const uf = event.target.value;
    const indexOfSelectState = event.target.selectedIndex;
    console.log(indexOfSelectState)
    stateInput.value = event.target.options[indexOfSelectState].text;

    citiesSelect.innerHTML = "<option>Selecione cidade</option>";
    citiesSelect.disabled = true;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (city of cities) {
                console.log(city.nome);
                citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citiesSelect.disabled = false;
        })
}

populateUfs();

const itensToCollect = document.querySelectorAll(".itens-grid li");

for (const item of itensToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectItems = [];
const collectedItem = document.querySelector("input[name=items]")

function handleSelectedItem(event) {
    const itemId = (event.target.dataset.id);
    const itemLi = event.target;

    itemLi.classList.toggle("selected");

    const alreadySelected = selectItems.findIndex(item => {
        return item == itemId; // true ou false
    })

    if (alreadySelected >= 0) {
        const filteredItens = selectItems.filter(item => { 
            return item != itemId;
        })
        selectItems = filteredItens;
    }else{
        selectItems.push(itemId);
    }
    collectedItem.value = selectItems;
}