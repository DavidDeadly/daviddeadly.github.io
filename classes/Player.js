export default class Player {
  constructor(name) {
    this.name = name;
    this.prize = 0;
  }

  win() {
    this.prize += 1000;
  }
}
