class CardDeck {

    #cardArray;
    #focusIndex;
    #cardDeck;
    
    constructor(cardArray){
        this.#cardArray = cardArray;
        this.#focusIndex = Math.floor(this.#cardArray.length/2)
        this.#cardDeck = [];

        //Add events to prev and next buttons from Carousel for Tracking focused Card
        document.querySelector('#prevBtn').addEventListener('click',()=>{
            if(this.#focusIndex > 0){
                this.#focusIndex -= 1;
                this.update();
            }
        });
        document.querySelector('#nextBtn').addEventListener('click',()=>{
            if (this.#focusIndex < this.#cardArray.length-1){
                this.#focusIndex += 1;
                this.update();
            }
        });
    }

    update(){
        const heart = document.querySelector('.fa-heart');
        if (this.#cardArray[this.#focusIndex].isLiked) {
            heart.className = 'fa-solid fa-heart fa-2xl';
        } else if (this.#cardArray[this.#focusIndex].isLiked === false){
            heart.className = 'fa-regular fa-heart fa-2xl';
        }
    }

    #addCardToDeck(){
        if (this.#cardDeck.length > 9){
            return;
        }
        const selectCard = this.#cardArray[this.#focusIndex];
        if (this.#cardDeck.includes(selectCard) === false){
            this.#cardDeck.push(selectCard);
            const cardDeck = document.querySelector('.deck');
            cardDeck.appendChild(this.#cardArray[this.#focusIndex].renderCard());
        } else {
            alert('Card already in Deck')
        }
    }

    #addLike(){
        console.log(this.#cardArray[this.#focusIndex].isLiked)
        if (this.#cardArray[this.#focusIndex].isLiked) {
            this.#cardArray[this.#focusIndex].isLiked = false;
        } else {
            this.#cardArray[this.#focusIndex].isLiked = true;
        }
        this.update();
    }

    renderCardDeck() {
        //Create Elements
        const wrapper = document.createElement('div');
        const buttons = document.createElement('div')
        const share = document.createElement('a');
        const addToDeck = document.createElement('a');
        const like = document.createElement('a');
        const shareIcon = document.createElement('i');
        const addToDeckIcon = document.createElement('i');
        const likeIcon = document.createElement('i');
        const deckWrapper = document.createElement('div');
        const deckHeader = document.createElement('div');
        const deck = document.createElement('div');

        //Assign Classes
        wrapper.className = 'cardDeckWrapper';
        buttons.className = 'cardDeckBtns';
        deckWrapper.className = 'cardDeck';
        deckHeader.className = 'deckHeader';
        deck.className = 'deck';
        share.className = 'btn';
        addToDeck.className = 'btn';
        like.className = 'btn';
        shareIcon.className = 'fa-solid fa-share fa-2xl';
        addToDeckIcon.className = 'fa-solid fa-plus fa-2xl';
        likeIcon.className = 'fa-regular fa-heart fa-2xl';

        deckHeader.textContent = 'Card Deck : '

        //Add Event Listeners
        addToDeck.addEventListener('click', ()=> this.#addCardToDeck())
        like.addEventListener('click',()=> this.#addLike())

        //Form in order of apearence
        share.appendChild(shareIcon);
        addToDeck.appendChild(addToDeckIcon);
        like.appendChild(likeIcon);
        buttons.appendChild(share);
        buttons.appendChild(addToDeck);
        buttons.appendChild(like);
        deckWrapper.appendChild(deckHeader);
        deckWrapper.appendChild(deck);
        wrapper.appendChild(buttons);
        wrapper.appendChild(deckWrapper);

        return wrapper;
    }

}

export { CardDeck };