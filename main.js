import {Card} from '/components/card.js';

const APIURL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';

async function addAllCards(){

    //Load Data
    const response = await fetch(APIURL);
    const peoples = await response.json();

    //Loop through items from API and create cards
    peoples.forEach(person => {
        const card = new Card(person);
        document.body.appendChild(card.makeCard());
    });
}

// Function for adding first card for CSS Dev
async function addFirstCard(){
    //Load Data
    const response = await fetch(APIURL);
    const peoples = await response.json();

    const card = new Card(peoples[0]);
    document.body.appendChild(card.makeCard());
}

// addAllCards();
addFirstCard();