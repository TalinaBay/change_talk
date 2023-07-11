import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wsh-menu"
export default class extends Controller {
  connect() {
  }

  static targets = [ "menuButton" ]

  open() {
    const child = this.menuButtonTarget;
    const parent = this.menuButtonTarget.parentNode;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      child.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    } else if (!parent.classList.contains("active")) {
      child.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    }
  }
}
