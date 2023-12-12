import { Card } from '/components/card.js'

class Carousel{

    #cardArray;

    constructor(array_of_people){
        this.#cardArray = array_of_people.map((person) => new Card(person))
        this.focusIndex = Math.floor(this.#cardArray.length/2);
    }

    getCardArray(){
        return this.#cardArray;
    }

    update() {
        const crslItems = document.querySelectorAll('.crslItem');

        crslItems.forEach( (div, index) => {
        
            if( index < this.focusIndex){
                div.classList.remove('focus');
                
                div.style.zIndex = index;
                const offset = 100+(this.#cardArray.length-index);
                div.style.transform = `translateX(-${offset}%) scale(100%)`;
               
            }
            else if(index === this.focusIndex)
            {
                div.classList.add("focus");
                div.style.zIndex = 300;
                div.style.transform = `translateX(0) scale(120%)`;
      
            }
            else {
                div.classList.remove("focus");
                div.style.zIndex = (this.#cardArray.length - index);
                const offset = 100+(index);
                div.style.transform = `translateX(${offset}%) scale(100%)`;
            }
        });
    
    }

    renderCarousel(){
        // Create all elements of finished carousel
        const wrapper = document.createElement('div');
        const carousel = document.createElement('div');
        const prev = document.createElement('a');
        const next = document.createElement('a');
        const prevIcon = document.createElement('i');
        const nextIcon = document.createElement('i');


        // Assign classes to elements
        carousel.className = 'carousel';
        wrapper.className = 'carouselWrapper';
        prev.className = 'btn';
        next.className = 'btn';
        prevIcon.className = 'fa fa-caret-left';
        nextIcon.className = 'fa fa-caret-right';

        //Assign Special case Ids and hrefs
        prev.id = 'prevBtn';
        next.id = 'nextBtn';
        prev.href = '#';
        next.href = '#'

        //Loop through cards and get HTML for rendering Carousel
        this.#cardArray.forEach(card => {
            const crslItem = document.createElement('div');
            crslItem.className = 'crslItem';
            crslItem.appendChild(card.renderCard());
            carousel.appendChild(crslItem);
        });

        //Adding event listeners to buttons
        prev.addEventListener('click',() =>{
            if(this.focusIndex > 0){
                this.focusIndex -= 1;
                this.update();
                console.log(this.focusIndex)
            }
        });
        next.addEventListener('click', () => {
            if (this.focusIndex < this.#cardArray.length-1){
                this.focusIndex += 1;
                this.update();
                console.log(this.focusIndex)
            }
        })

        //Append in order of apearence 
        prev.appendChild(prevIcon);
        next.appendChild(nextIcon);
        wrapper.appendChild(prev);
        wrapper.appendChild(carousel);
        wrapper.appendChild(next);
        return wrapper;
    }
}

export { Carousel };