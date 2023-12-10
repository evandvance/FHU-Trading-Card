import { Carousel } from './components/carousel.js';
import { Card } from '/components/card.js';

const APIURL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';

(async function loadCarousel(){

    //Load Data
    const response = await fetch(APIURL);
    const peoples = await response.json();

    //Create Carousel Object
    const carousel = new Carousel(peoples);
    // document.querySelector('.container').appendChild(carousel.makeCarousel())

    //Populate page with cards instead

    peoples.forEach(element => {
        const card = new Card(element)
        document.querySelector('.container').appendChild(card.makeCard())
    });
})();
