import {Card} from '/components/card.js';
import { Carousel } from './components/carousel.js';

const APIURL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';

(async function loadCarousel(){

    //Load Data
    const response = await fetch(APIURL);
    const peoples = await response.json();

    //Create Carousel Object
    const carousel = new Carousel(peoples);
    document.querySelector('.container').appendChild(carousel.makeCarousel())
})();
