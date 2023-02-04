import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="stages-of-change-list"
export default class extends Controller {
  static targets = ["precdescription", "cdescription", "prepdescription", "relapsedescription", "maintdescription", "precstagetext", "cstagetext", "prepstagetext", "relapsestagetext", "maintstagetext"]
  connect() {
  }

  precstage() {
    this.precstagetextTarget.classList.add("active-progress")
    this.cstagetextTarget.classList.remove("active-progress")
    this.prepstagetextTarget.classList.remove("active-progress")
    this.relapsestagetextTarget.classList.remove("active-progress")
    this.maintstagetextTarget.classList.remove("active-progress")
    this.precdescriptionTarget.classList.remove("d-none")
    this.cdescriptionTarget.classList.add("d-none")
    this.prepdescriptionTarget.classList.add("d-none")
    this.relapsedescriptionTarget.classList.add("d-none")
    this.maintdescriptionTarget.classList.add("d-none")
  }
  cstage() {
    this.precstagetextTarget.classList.remove("active-progress")
    this.cstagetextTarget.classList.add("active-progress")
    this.prepstagetextTarget.classList.remove("active-progress")
    this.relapsestagetextTarget.classList.remove("active-progress")
    this.maintstagetextTarget.classList.remove("active-progress")
    this.precdescriptionTarget.classList.add("d-none")
    this.cdescriptionTarget.classList.remove("d-none")
    this.prepdescriptionTarget.classList.add("d-none")
    this.relapsedescriptionTarget.classList.add("d-none")
    this.maintdescriptionTarget.classList.add("d-none")
  }
  prepstage() {
    this.precstagetextTarget.classList.remove("active-progress")
    this.cstagetextTarget.classList.remove("active-progress")
    this.prepstagetextTarget.classList.add("active-progress")
    this.relapsestagetextTarget.classList.remove("active-progress")
    this.maintstagetextTarget.classList.remove("active-progress")
    this.precdescriptionTarget.classList.add("d-none")
    this.cdescriptionTarget.classList.add("d-none")
    this.prepdescriptionTarget.classList.remove("d-none")
    this.relapsedescriptionTarget.classList.add("d-none")
    this.maintdescriptionTarget.classList.add("d-none")
  }
  relapsestage() {
    this.precstagetextTarget.classList.remove("active-progress")
    this.cstagetextTarget.classList.remove("active-progress")
    this.prepstagetextTarget.classList.remove("active-progress")
    this.relapsestagetextTarget.classList.add("active-progress")
    this.maintstagetextTarget.classList.remove("active-progress")
    this.precdescriptionTarget.classList.add("d-none")
    this.cdescriptionTarget.classList.add("d-none")
    this.prepdescriptionTarget.classList.add("d-none")
    this.relapsedescriptionTarget.classList.remove("d-none")
    this.maintdescriptionTarget.classList.add("d-none")
  }
  maintstage() {
    this.precstagetextTarget.classList.remove("active-progress")
    this.cstagetextTarget.classList.remove("active-progress")
    this.prepstagetextTarget.classList.remove("active-progress")
    this.relapsestagetextTarget.classList.remove("active-progress")
    this.maintstagetextTarget.classList.add("active-progress")
    this.precdescriptionTarget.classList.add("d-none")
    this.cdescriptionTarget.classList.add("d-none")
    this.prepdescriptionTarget.classList.add("d-none")
    this.relapsedescriptionTarget.classList.add("d-none")
    this.maintdescriptionTarget.classList.remove("d-none")
  }
}
