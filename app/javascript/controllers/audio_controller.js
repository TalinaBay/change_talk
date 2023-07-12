import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="audio"
export default class extends Controller {
  connect() {
  }

  static targets = [ "audioFile", "iconPlay", "iconPause" ]

  play(event) {
    if (!event.currentTarget.classList.contains('d-none')) {
      this.iconPauseTarget.classList.remove("d-none");
      this.iconPlayTarget.classList.add("d-none");
    };
    this.audioFileTarget.play();
  }

  pause(event) {
    if (!event.currentTarget.classList.contains('d-none')) {
      this.iconPauseTarget.classList.add("d-none");
      this.iconPlayTarget.classList.remove("d-none");
    };
    this.audioFileTarget.pause();
  }
}
