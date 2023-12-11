import { Card } from '/components/card.js'

class Carousel{

    #focusIndex;
    #cardArray;

    constructor(array_of_people){
        this.#cardArray = array_of_people.map((person) => new Card(person))
        this.#focusIndex = Math.floor(this.#cardArray.length/2);
    }

    #update() {
        let windowWidth = window.innerWidth;
        console.log(windowWidth);
        const length = 59;

        this.#cardArray.forEach( (div, index) => {
        
            if( index < activeIndex){
                div.classList.remove("active");
                
                div.style.zIndex = index;
                const offset = 100+(length-index);
                div.style.transform = `translateX(-${offset}%) scale(100%)`;
               
            }
            else if(index === activeIndex)
            {
                div.classList.add("active");
                div.style.zIndex = 300;
                div.style.transform = `translateX(0) scale(120%)`;
      
            }
            else {
                div.classList.remove("active");
                div.style.zIndex = (length - index);
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
            if(this.#focusIndex <= 0){
                this.#focusIndex--;
                this.#update();
            }
        });
        next.addEventListener('click', () => {
            if (this.#focusIndex > this.#cardArray.length){
                this.#focusIndex++;
                this.#update();
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