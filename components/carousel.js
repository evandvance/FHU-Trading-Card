import { Card } from '/components/card.js'

class Carousel{

    #innerHTML;
    #peoples;

    constructor(array_of_people){
        this.#peoples = array_of_people;
    }

    makeCarousel(){
        // Create all elements of finished carousel
        const wrapper = document.createElement('div');
        const carousel = document.createElement('ul');
        const buttonWrapper = document.createElement('div');
        const lbutton = document.createElement('button');
        const rbutton = document.createElement('button');

        // Assign classes to elements
        carousel.className = 'carousel';
        wrapper.className = 'wrapper';
        buttonWrapper.className = 'buttonWrapper';
        lbutton.className = 'slideLeft';
        rbutton.className = 'slideRight';

        //Add Text to buttons
        lbutton.textContent = '>';
        rbutton.textContent = '<';

        // Loop through person in peoples array and create cards from their data
        this.#peoples.forEach(person => {
            const card = new Card(person);
            carousel.appendChild(card.makeCarouselCard());
        });

        wrapper.appendChild(carousel);
        wrapper.appendChild(lbutton)
        wrapper.appendChild(rbutton)
        console.log(wrapper);
        return wrapper;
    }
}

export { Carousel };