export abstract class Animal {

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

//Abstract se usa poniendo abstract delante de una clase
//y esto especifica que no se puede instanciar sino que solo
//se puede crear consiguiendo que esto sea un
//cascarón muy genérico y que no tiene sentido usar directamente
//Por ejemplo un animal es muy generico y luego cada animal
//implementa realmente algo más específico como un avestruz
