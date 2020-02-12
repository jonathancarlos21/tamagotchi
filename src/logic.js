export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.foodLevel = 10;
    }

    addName(name) {
      this.name = name;
    }

    getHungry() {
      setInterval(() => {
        this.foodLevel--;
        this.health -=3;
      }, 1000);
    }

    feed() {
      this.foodLevel += 2;
    }

    walk() {
      this.health += 5;
    }

    sleep() {
      this.health +=10
    }
}