import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mi-quiz"
export default class extends Controller {
  static targets = ["firstQ", "secondQ"]

  connect() {
    console.log(this.constructor.targets);
  }

  submit(event) {
    event.preventDefault() // to stop page from reloading when clicking the button
   
  
    let elements = this.firstQTarget.children;
    this.checkQuiz(elements);
    
    elements = this.secondQTarget.children;
    this.checkQuiz(elements);
    
  }

  checkQuiz(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "true")){
        elements[i].classList.add('correct')
      } else if (elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "false")) {
        elements[i].classList.add('incorrect')
        // TODO: Add explanation
      }
    }
  }

  clicked(event) {
    // event.innerHTML.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
    // console.log(event.currentTarget.dataset.quizAnswer) // returns the value of data-*
    // const result = this.firstQTarget.children[0].classList.contains('active') === event.currentTarget.dataset.quizAnswer;
    // console.log(result);
  }
}
