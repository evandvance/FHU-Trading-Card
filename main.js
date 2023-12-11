import { Carousel } from './components/carousel.js';

const API_URL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';

(async function loadCarousel(){

    //Load Data
    const response = await fetch(API_URL);
    const peoples = await response.json();

    //Create Carousel Object
    const carousel = new Carousel(peoples);
    document.querySelector('.container').appendChild(carousel.renderCarousel())

    //Initilize Carousel 
    carousel.update();
})();
