import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Timer v13");
  }

  static targets = [ "minutes", "seconds" ]

 
  // TIMER STARTED
  control() {
    let secondsLeft = parseInt(this.minutesTarget.textContent) * 60; // convert min from HTML to sec

      // countdown
      const interval = setInterval(() => {
        let min = Math.floor(secondsLeft / 60); // find minutes from secondsLeft
        let sec = secondsLeft % 60; // find seconds per minute (59..0) from secondsLeft
        
        this.minutesTarget.textContent = min.toString().padStart(2, "0"); // update the HTML value in a right two-digit format. Ex: 05 min instead of 5 
        this.secondsTarget.textContent = sec.toString().padStart(2, "0"); 
        secondsLeft--;
  
        if (secondsLeft < 0) {
          clearInterval(interval);
        }
      }, 1000); // Repeat 1000ms -> 1s
  }
}
