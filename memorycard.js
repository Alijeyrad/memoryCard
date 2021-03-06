var hideDone = function(){
    document.getElementById('done').style.display = 'none';
}

var cardsManipulator = function(){
  const cards = [{
    question: "Demo question",
    answer: "Demo answer",
    cardElementQuestion: function(){ 
      return `<div class="col gy-4">
    <div class="p-4 border bg-light" id="my-card">
      <div id="icon">
        <i onclick="x.setModalText(event)" data-bs-toggle="modal" data-bs-target="#editModal" class="fa-solid fa-pen-to-square"></i>
        <i onclick="x.remove(event)" class="fas fa-regular fa-xmark"></i>
      </div>
      <div id="q">${this.question}</div>
      <div id="edit" onclick="x.showAnswer(event)">
      <span id="c-ans" >See Answer</span>
      <i class="fa-solid fa-angles-left"></i>
      </div>
    </div>
    </div>`}
  }];
  let cardNum;
  function start() {
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
        document.getElementById('container').innerHTML = '<h1>No Cards</h1>';
    } else {
        document.getElementById('container').innerHTML = element;
    }
  }
  return {
    setModalText: function(event) {
      let thisCardQ = event.path[2].children[1].innerHTML;
      for (let i=0; i<cards.length; i++){
        if(thisCardQ==cards[i].question || thisCardQ==cards[i].answer){
          cardNum = i;
        }
      }
      document.getElementById('modalQuestion').innerHTML = cards[cardNum].question;
      document.getElementById('modalAnswer').innerHTML = cards[cardNum].answer;
    },

    editCard: function(event) {
      let questionEdited = event.path[2].children[1].children[0][0].value;
      let answerEdited = event.path[2].children[1].children[0][1].value;
      cards[cardNum].question = questionEdited;
      cards[cardNum].answer = answerEdited;
      document.getElementById('modalForm').reset();
      start();
      $('#editModal').modal('toggle');
    },

    showAnswer: function(event) {
      let target;
      let target2;
      let isQuestion = true;
      let card;
      let q = event.path[2].children[1].innerHTML;
      // find the card in cards array >> cards[target]
      for (let i=0; i<cards.length; i++){
        if (cards[i].question==q){
          target = i;
        } else if(cards[i].answer==q){
          target = i;
          isQuestion = false;
        }
      }
      // find the element in document >> document.querySelectorAll('#q')[target2]
      let elements = document.querySelectorAll('#q')
      for (let i=0; i<elements.length; i++){
        if(elements[i].innerHTML==q){
          target2 = i
        }
      }
      // find the card that was clicked >> document.querySelectorAll('#my-card')[card].children[2].children[0]
      let myCards = document.querySelectorAll('#my-card');
      for (let i=0; i<myCards.length; i++){
        if (myCards[i].children[1].innerHTML==q){
          card = i;
        }
      }
      // show the answer or question based on status
      if (isQuestion){
        document.querySelectorAll('#q')[target2].innerHTML = cards[target].answer;
        document.querySelectorAll('#my-card')[card].children[2].children[0].innerHTML = 'See Question';
      } else {
        document.querySelectorAll('#q')[target2].innerHTML = cards[target].question;
        document.querySelectorAll('#my-card')[card].children[2].children[0].innerHTML = 'See Answer';
      }
    },

    remove: function(event) {
      let text = event.path[2].children[1].innerHTML;
      for (let i=0; i<cards.length; i++){
          if (cards[i].question==text || cards[i].answer==text){
              cards.splice(i,1)
              break;
          }
      }
      start();
    },

    addCard: function(event) {
      event.preventDefault();
      let ques = document.getElementsByName('question')[0].value;
      document.getElementsByName('question')[0].value = '';
      let ans = document.getElementsByName('answer')[0].value;
      document.getElementsByName('answer')[0].value = '';
      if (ques=='' || ans==''){
          document.getElementById('info').innerHTML = 'Write somthing then try again!';
      } else {
          cards.push({
            question: ques,
            answer: ans,
            cardElementQuestion: function(){ 
              return `<div class="col gy-4">
            <div class="p-4 border bg-light" id="my-card">
              <div id="icon">
                <i onclick="x.setModalText(event)" data-bs-toggle="modal" data-bs-target="#editModal" class="fa-solid fa-pen-to-square"></i>
                <i onclick="x.remove(event)" class="fas fa-regular fa-xmark"></i>
              </div>
              <div id="q">${this.question}</div>
              <div id="edit" onclick="x.showAnswer(event)">
              <span id="c-ans" >See Answer</span>
              <i class="fa-solid fa-angles-left"></i>
              </div>
            </div>
            </div>`}
          });
          document.getElementById('done').style.display = 'block';
          document.getElementById('info').innerHTML = ''
          setTimeout(hideDone,3000)
          start()
      }
    },
    startApp: function() {
      return start()
    }
  }
}

let x = cardsManipulator()