class Vehicle2 {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beeep');
  }
}

const vehicle2 = new Vehicle2('orange');
console.log(vehicle2.color);

class Car2 extends Vehicle2 {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroooom!');
  }

  startDrivingProcess() {
    this.drive();
  }
}

const carr = new Car2(4, 'green');
carr.startDrivingProcess();
// carr.honk();
