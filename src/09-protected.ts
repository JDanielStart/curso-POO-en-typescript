export class Animal {

  constructor (
    protected name: string
  ) {}

  move() {
    return console.log("Moving along!");
  }

  greeting() {
    return console.log(`Hello, I'm ${this.name}`);
  }

  protected doSomething() {
    console.log("doo");
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("woof");
    }
    this.doSomething();
  }

  move() {
    console.log("moving as a dog");
    super.move();
  }
}

const chase = new Dog("chase", "Nico");
chase.move();
chase.greeting();
chase.woof(3);
console.log(chase.owner);
