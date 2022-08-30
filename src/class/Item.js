export default class Item {

  constructor(text) {
    this.id = this.generateID(text)
    this.text = text
    this.done = false
  }

  generateID(text) {
    return "text" + Math.round(Math.random(10) * 1000)
  }

}