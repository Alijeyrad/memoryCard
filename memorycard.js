const cards = [
  {
    question: "Demo question",
    answer: "Demo answer",
    cardElementQuestion: function(){ return `<div class="col gy-4">
    <div onclick="showAnswer(event)" class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fas fa-regular fa-xmark"></i>
      </div>
      ${this.question}
    </div>
    </div>`},
    cardElementAnswer: function() { return `<div class="col gy-4">
    <div onclick="showAnswer(event)" class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fas fa-regular fa-xmark"></i>
      </div>
      ${this.answer}
    </div>
    </div>`}
  },
  {
    question: "Demo question 2",
    answer: "Demo answer 2",
    cardElementQuestion:function(){ return `<div class="col gy-4">
    <div onclick="showAnswer(event)" class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fas fa-regular fa-xmark"></i>
      </div>
      ${this.question}
    </div>
    </div>`},
    cardElementAnswer: function(){return `<div class="col gy-4">
    <div onclick="showAnswer(event)" class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fas fa-regular fa-xmark"></i>
      </div>
      ${this.answer}
    </div>
    </div>`}
  },
];

let showAnswer = function(event){
    console.log(event)
}

//let cardColumn = `<div class="row gx-5">${cardElement}${cardElement}</div>`;
var element = "";

for (let i = 0; i < cards.length; i++) {
  if (i%2==0){
      element += `<div class="row gx-5">${cards[i].cardElementQuestion()}</div>`
  } else if (i%2==1) {
      element = element.slice(0, -6)
      element += cards[i].cardElementQuestion() + '</div>'
    }
}

document.getElementById('container').innerHTML = element;