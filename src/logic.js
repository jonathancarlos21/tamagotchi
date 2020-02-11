export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.foodlevel = 20;
    }

    setHunger() {
      setInterval(() => {
        this.foodlevel--;
      }, 1000);
    }
}