export class MyDate {

  //Para automatizar hay que poner el modificador de acceso
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
    ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this._day += amount;
    }
    if (type === "months") {
      this._month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    }
    else {
      throw new Error("month out of range");
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
try {
  myDate.month = -24;
}
catch (error) {
  console.log(`Devuelve el error ${error}`)
}
try {
  myDate.month = 78;
}
catch (error) {
  console.log(`Devuelve el error ${error}`)
}
myDate.month = 9;
console.log(myDate.printFormat());
