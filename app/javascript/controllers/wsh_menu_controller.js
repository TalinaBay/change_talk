import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wsh-menu"
export default class extends Controller {
  connect() {
  }

  static targets = [ "menuButton", "list" ]

  open() {
    this.listActivated();
    const child = this.menuButtonTarget;
    const parent = this.menuButtonTarget.parentNode;
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      child.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    } else if (!parent.classList.contains("active")) {
      child.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    }
  }

  // HELPER FUNCTIONS //
  listActivated() {
    const section = window.location.href.split("/")[5];
    const childLiTags = this.listTarget.children;
    childLiTags[section - 1].classList.add("active");
  }
}
