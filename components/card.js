class Card{

  #innerHTML;
  #backgroundColors = {
    "Mathematics" : "#172554",
    "Science" : "#064e3",
    "Computer Science" : "#166534",
    "Engineering" : "#0c4a6e",
    "Bible" : "#3b0764",
    "Political Science" : "#1f2937",
    "Business" : "#22d3ee",
    "Buisness" : "#22d3ee",
    "Marketing" : "#22d3ee",
    "Theatre" : "#fde047",
    "Sociology" : "#831843",
    "Photography" : "#f87171",
    "History" : "#78716c",
    "Cybersecurity" : "#450a0a",
    "Nursing" : "#1e1b4b",
    "Education" : "#ff00ff",
    "Law" : "#4a044e",
    "Spanish" : "#c2410c",
    "English" : "#d97706",
    "Spanish Education" : "#c2410c",
    "Graphic Design" : "#059669",
    "Choral Music" : "#3f6212",
    "Communications" : "#22d3ee",
    "Psychology" : "#86198f",
    "Academics" : "#ff00ff",
    "Kinesiology" : "#991b1b",
    "Biochemistry" : "#064e3b",
    "Music" : "#3f6212",
    "" : "#71717a",
    "Philosophy" : "#3b0764"
  };

    constructor(person){
        this.person = person;
        this.isLiked = false; 
        this.#innerHTML = `<!-- Template Card for writting CSS and then JS in the future -->
          <div class="cardWrapper">
            <header>
              <div class="left">
                <p class="rank">${this.person.Rank}</p>
                <h1>${this.person.FirstName} ${this.person.LastName}</h1>
              </div>
              <p class="type">${this.person.Type}</p>
              <div class="right">
                <p class="hp">HP: ${this.person.HitPoints}</p>
                <p class="department">${this.person.FieldofStudy}</p>
              </div>
            </header>

            <div class="cardBody">
              <div class="imgWrapper">
                <img src="https://fhu-faculty-api.netlify.app/images/headshots/${this.person.Image}" alt="${this.person.FirstName} ${this.person.LastName}" />
              </div>
              <div class="info">
                ${this.person.id} | ${this.person.NickName} | ${this.person.Height}
              </div>
  
              <div class="stats">
                <div class="costWrapper">
                  <p class="cost">Cost: ${this.person.Cost}</p>
                </div>
                <p class="stamina">Stamina: ${this.person.Stamina}</p>
              </div>
              <div class="attackWrapper">
                <div class="attack">
                  <p>${this.person.Attack1}</p>
                  <p class="damage">${this.person.Attack1Damage}</p>
                </div>
                <div class="attack">
                  <p>${this.person.Attack2}</p>
                  <p class="damage">${this.person.Attack2Damage}</p>
                </div>
              </div>
              <div class="resWeakWrapper">
                <div class="resWeak">
                  <h3>Resistances</h3>
                  <p>${this.person.Resistances}</p>
                </div>
                <div class="resWeak">
                  <h3>Weakenesses</h3>
                  <p>${this.person.Weaknesses}</p>
                </div>
              </div>
            </div>
            <footer>
              <div class="iconWrapper">
                <i class="fa-solid fa-copyright"></i>
                <p>2023</p>
              </div>
              <p class="hashtag">${this.person.HashTag}</p>
            </footer>
          </div>`;
    };

    //Construct Card
    renderCard() {
      const cardHTML = document.createElement('div');
      cardHTML.innerHTML = this.#innerHTML;
      cardHTML.className = 'card'
      cardHTML.style.backgroundImage = `linear-gradient(to top, #171717, ${this.#backgroundColors[this.person.FieldofStudy]}`;
      return cardHTML;
    }

}

export {Card};