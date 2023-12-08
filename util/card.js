

class Card {
    constructor(person){
        this.person = person;
        this.string = "CAPS"
    };

    //Get card as HTML
    get innerHTML() {
        return `<!-- Template Card for writting CSS and then JS in the future -->
        <div class="card">
          <div class="cardWrapper">
            <header>
              <p class="rank">${this.person.Rank}</p>
              <h1>${this.person.FirstName} ${this.person.LastName}</h1>
              <p class="type">${this.person.Type}</p>
              <div class="right">
                <p class="hp">HP: ${this.person.HitPoints}</p>
                <p class="department">${this.person.Department}</p>
              </div>
            </header>
            <div class="cardbody">
              <div class="imgWrapper">
                <p class="degree">${this.person.EducationLevel}</p>
                <img src="images/headshots/${this.person.LastName.toLowerCase()}_${this.person.FirstName.toLowerCase()}.jpg" alt="${person.FirstName} ${person.LastName}" />
                <div class="info">
                  <p id="id">${this.person.id}</p>
                  <p id="Nickname">${this.person.NickName}</p>
                  <p id="height">${this.person.Height}</p>
                </div>
              </div>
  
              <div class="stats">
                <div class="costWrapper">
                  <p class="cost">Cost: ${this.person.Cost}</p>
                  <i class=""></i>
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
                <i class=""></i>
                <p>2023</p>
              </div>
              <p class="hashtag">${this.person.HashTag}</p>
              <p class="creator">${this.person.Creator}</p>
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