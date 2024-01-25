console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,0));

class MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    return numbers.reduce((max, item) =>
    max >= item ? max : item, 0
    );
  }
}

console.log(MyMath.PI);
const numbers = [1, 2, 455, 34345 , 23423]
console.log(MyMath.max(...numbers));

