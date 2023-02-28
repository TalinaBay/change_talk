import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mi-quiz"
export default class extends Controller {
  static targets = ["question"]

  connect() {
    // console.log(this.constructor.targets);
    console.log("14:10");

    console.log(this.questionTargets)

  }

  // ----------------------  EVENT LISTENERS  ----------------------
  submit(event) {
    event.preventDefault() // to stop page from reloading when clicking the button

    const targets = this.questionTargets
    for (let index = 0; index < targets.length; index++) {
      const elements = targets[index].children;
      this.checkQuiz(elements);
    }
  }
   
  clicked(event) {
    // for single-answer questions
    if (event.currentTarget.classList.contains('single-answer')) {
      const parent = event.currentTarget.parentElement
      const siblings = parent.children
      // remove active if it was selected previously
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove("active");
      }
      event.currentTarget.classList.add("active");
    } else { // for multi-answer questions
      event.currentTarget.classList.toggle("active");
    }
  }

  reset(event) {
    event.preventDefault();
    const targets = this.questionTargets
    for (let index = 0; index < targets.length; index++) {
      const elements = targets[index].children;
      this.removeAllClasses(elements);
    }
  }

  // ---------------------- FUNCTIONS  ----------------------
  checkQuiz(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "true")){
        // console.log(event.currentTarget.dataset.quizAnswer) // returns the value of data-*
        elements[i].classList.add('correct');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-check"></i>';
      } else if (elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "false")) {
        elements[i].classList.add('incorrect');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else if (!elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "false")) {
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else if (!elements[i].classList.contains('active') && (elements[i].dataset.quizAnswer === "true")) {
        elements[i].classList.add('incorrect');
        elements[i].querySelector(".feedback").innerHTML = '<i class="fa-solid fa-check"></i>';
      }
      // TODO: Add explanation
    }
  }

  removeAllClasses(questionOptions) { 
    for (let i = 0; i < questionOptions.length; i++) {
      questionOptions[i].classList.remove("active", "correct", "incorrect");
      questionOptions[i].querySelector(".feedback").innerHTML = "";
    }
  }
}
