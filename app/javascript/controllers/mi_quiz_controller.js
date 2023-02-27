import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mi-quiz"
export default class extends Controller {
  static targets = ["firstQ", "secondQ"]

  connect() {
    // console.log(this.constructor.targets);
    console.log("19:59");
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
        elements[i].classList.add('correct');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      } else if (elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "false")) {
        elements[i].classList.add('incorrect');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      } else if (!elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "false")) {
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      } else if (!elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "true")) {
        elements[i].classList.add('incorrect');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      }
      // TODO: Add explanation
      // Add a case when not all answers were selected
    }
  }

  clicked(event) {
    // event.innerHTML.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
    // console.log(event.currentTarget.dataset.quizAnswer) // returns the value of data-*
    // const result = this.firstQTarget.children[0].classList.contains('active') === event.currentTarget.dataset.quizAnswer;
    // console.log(result);
    event.currentTarget.querySelector(".feedback").innerHTML = '<i class="fa-solid fa-circle"></i>';
  }

  reset(event) {
    event.preventDefault();
    let elements = this.firstQTarget.children;
    this.removeAllClasses(elements);
    elements = this.secondQTarget.children;
    this.removeAllClasses(elements);
  }

  removeAllClasses(questionOptions) { 
    for (let i = 0; i < questionOptions.length; i++) {
      questionOptions[i].classList.remove("active", "correct", "incorrect");
      questionOptions[i].querySelector(".feedback").innerHTML = '<i class="fa-regular fa-circle"></i>';
    }
  }
}
