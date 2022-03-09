const cards = [
  {
    question: "Demo question",
    answer: "Demo answer",
    cardElementQuestion: function(){ return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.question}</div>
    </div>`},
    cardElementAnswer: function() { return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.answer}</div>
    </div>`}
  },
  {
    question: "Demo question 2",
    answer: "Demo answer 2",
    cardElementQuestion: function(){ return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.question}</div>
    </div>`},
    cardElementAnswer: function() { return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.answer}</div>
    </div>`}
  },
  {
    question: "Demo question 3",
    answer: "Demo answer 3",
    cardElementQuestion: function(){ return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.question}</div>
    </div>`},
    cardElementAnswer: function() { return `<div onclick="showAnswer(event)" class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onclick="remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>${this.answer}</div>
    </div>`}
  },
];

let showAnswer = function(event){
    var tar;
    var question = true;
    for(let i=0; i<cards.length; i++){
        if (cards[i].cardElementQuestion().slice(55, -11)==event.target.outerHTML) {
            tar = i // cards[target].cardElementAnswer()
        } else if (cards[i].cardElementAnswer().slice(55, -11)==event.target.outerHTML) {
            tar = i;
            question = false;
        }
    }
    if(question){
        event.target.outerHTML = cards[tar].cardElementAnswer()
    } else {
        event.target.outerHTML = cards[tar].cardElementQuestion()
    }
    
}

var remove = function(event){
    let text = event.path[2]['innerText'];
    for (let i=0; i<cards.length; i++){
        if (cards[i].question==text || cards[i].answer==text){
            cards.splice(i,1)
            break;
        }
    }
    start();
}


var start = function() {
  var element = "";
  for (let i = 0; i < cards.length; i++) {
    if (i%2==0){
        element += `<div class="row gx-5">${cards[i].cardElementQuestion()}</div>`
    } else if (i%2==1) {
        element = element.slice(0, -6)
        element += cards[i].cardElementQuestion() + '</div>'
    }
}
if(element.length==0){
    document.getElementById('container').innerHTML = '<h1>No Cards</h1>'
} else {
    document.getElementById('container').innerHTML = element;
}
}



