import { Card } from '/components/card.js'

class Carousel{

    #focusIndex;
    #cardArray;

    constructor(array_of_people){
        this.#cardArray = array_of_people.map((person) => new Card(person))
        this.#focusIndex = Math.floor(this.#cardArray.length/2);
    }

    update() {

    }

    renderCarousel(){
        // Create all elements of finished carousel
        const wrapper = document.createElement('div');
        const carousel = document.createElement('div');
        const buttonWrapper = document.createElement('div');
        const lbutton = document.createElement('button');
        const rbutton = document.createElement('button');

        // Assign classes to elements
        carousel.className = 'carousel';
        wrapper.className = 'wrapper';
        buttonWrapper.className = 'buttonWrapper';
        lbutton.className = 'lbutton';
        rbutton.className = 'rbutton';

        //Add Text to buttons
        lbutton.textContent = '>';
        rbutton.textContent = '<';

        //Loop through cards and get HTML for rendering Carousel
        this.#cardArray.forEach(card => carousel.appendChild(card.renderCard()))

        //Append in order of apearence 
        wrapper.appendChild(lbutton);
        wrapper.appendChild(carousel);
        wrapper.appendChild(rbutton);
        console.log(wrapper);
        return wrapper;
    }
}

export { Carousel };