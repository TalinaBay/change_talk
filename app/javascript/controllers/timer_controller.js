import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Timer v15");
  }

  static targets = [ "minutes", "seconds", "startButton", "timer" ]

 
  // TIMER STARTED
  control() {
    this.startButtonTarget.setAttribute("disabled", ""); // once the timer starts -> disable the start button
    this.startButtonTarget.classList.add("opacity-50"); // add a Bootstrap class to change opacity
    let secondsLeft = parseInt(this.minutesTarget.textContent) * 60; // convert min from HTML to sec
    const timerTimeInSec = secondsLeft;
    
    // countdown
    const interval = setInterval(() => {
      let min = Math.floor(secondsLeft / 60); // find minutes from secondsLeft
      let sec = secondsLeft % 60; // find seconds per minute (59..0) from secondsLeft
      
      this.minutesTarget.textContent = min.toString().padStart(2, "0"); // update the HTML value in a right two-digit format. Ex: 05 min instead of 5 
      this.secondsTarget.textContent = sec.toString().padStart(2, "0"); 
      secondsLeft--;

      // change the colour of the timer background colour
      if (secondsLeft == (Math.round(timerTimeInSec * 0.9))) {
        this.timerTarget.style.backgroundColor = "rgb(34, 74, 41)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.8))) {
        this.timerTarget.style.backgroundColor = "rgb(53, 84, 37)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.7))) {
        this.timerTarget.style.backgroundColor = "rgb(76, 94, 32)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.6))) {
        this.timerTarget.style.backgroundColor = "rgb(101, 102, 27)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.5))) {
        this.timerTarget.style.backgroundColor = "rgb(129, 108, 25)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.4))) {
        this.timerTarget.style.backgroundColor = "rgb(160, 113, 30)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.3))) {
        this.timerTarget.style.backgroundColor = "rgb(192, 115, 44)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.2))) {
        this.timerTarget.style.backgroundColor = "rgb(224, 114, 65)";
      } else if (secondsLeft == (Math.round(timerTimeInSec * 0.1))) {
        this.timerTarget.style.backgroundColor = "rgb(255, 113, 92)";
      }

      // stop the timer once seconds are gone
      if (secondsLeft < 0) {
        clearInterval(interval);
      }
      
      }, 1000); // Repeat 1000ms -> 1s
  }
}
