import {Card} from '/componenets/card.js'
// const APIURL = 'https://fhu-trading-card-edv.netlify.app/FHU-faculty-api.json';
const APIURL = 'FHU-faculty-api.json'

async function addAllCards(){

    //Load Data
    const response = await fetch(APIURL);
    const peoples = await response.json();

    peoples.forEach(element => {
        const card = new Card(element);
        const cardHTML = document.createElement('div');
        cardHTML.innerHTML = card.innerHTML;
        document.body.appendChild(cardHTML);
    });
}

addAllCards();
