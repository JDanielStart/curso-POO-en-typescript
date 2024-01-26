import { Dog } from "./08-inheritance";

/* function getValue(value: unknown ) {
  return value;
}

function getValue(value: string | number ) {
  return value;
} */

function getValue<myType, myType2>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number, string>(12).toFixed();
getValue<string, number>("12").toLowerCase();
getValue<number[], string>([1,11,1]).forEach;
const fifi = new Dog("fifi", "Nico");
getValue<Dog, string>(fifi).move();
