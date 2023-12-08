

class Card {
    constructor(person){
        this.person = person;
    };

    //Get card as HTML
    get innerHTML() {
        return `<!-- Template Card for writting CSS and then JS in the future -->
        <div class="card">
          <div class="cardWrapper">
            <header>
              <p class="rank">${this.person.Rank}</p>
              <h1>${this.person.FirstName} ${this.person.LastName}</h1>
              <p class="type">Wizard</p>
              <div class="right">
                <p class="hp">60</p>
                <p class="department">Computer Science</p>
              </div>
            </header>
            <div class="cardbody">
              <div class="imgWrapper">
                <p class="degree">PHD</p>
                <img src="images/headshots/casey_Kenan.jpg" alt="" />
                <div class="info">
                  <p id="id">1</p>
                  <p id="Nickname">Dad Joke</p>
                  <p id="height">5'6"</p>
                  <p class="weight">200lbs</p>
                </div>
              </div>
  
              <div class="stats">
                <div class="costWrapper">
                  <p class="cost">Cost: 7</p>
                  <i class=""></i>
                </div>
                <p class="stamina">Stamina: Low</p>
              </div>
              <div class="attackWrapper">
                <div class="attack">
                  <p>Indescirmate Dad Joke</p>
                  <p class="damage">62</p>
                </div>
                <div class="attack">
                  <p>Ignorant Slag</p>
                  <p class="damage">74</p>
                </div>
              </div>
              <div class="resWeakWrapper">
                <div class="resWeak">
                  <h3>Resistances</h3>
                  <p>Children, Whining</p>
                </div>
                <div class="resWeak">
                  <h3>Weakenesses</h3>
                  <p>Grading homework, Comic Sans, Chapel</p>
                </div>
              </div>
            </div>
            <footer>
              <div class="iconWrapper">
                <i class=""></i>
                <p>2023</p>
              </div>
              <p class="hashtag">#CodeHard</p>
              <p class="creator">Kenan Casey</p>
            </footer>
          </div>
        </div>`
    }

    //Construct Card with 'better' methods
    makeCard() {
        return;
    }

}

export {Card};