import { Carousel } from './components/carousel.js';
import { CardDeck } from './components/carddeck.js';

const API_URL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';

(async function loadPage(){

    //Load Data
    const response = await fetch(API_URL);
    const peoples = await response.json();

    //Get Container for creating Page
    const container = document.querySelector('.container');

    //Create Carousel Object
    const carousel = new Carousel(peoples);
    container.appendChild(carousel.renderCarousel())

    //Initilize Carousel 
    carousel.update();

    //Create CardDeck 
    const cardDeck = new CardDeck(carousel.getCardArray())
    container.appendChild(cardDeck.renderCardDeck())
})();