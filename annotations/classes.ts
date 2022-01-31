class Vehicle2 {
  drive(): void {
    console.log('Chugga chugga');
  }
  private honk(): void {
    console.log('Beeep');
  }
}

class Car2 extends Vehicle2 {
  drive(): void {
    console.log('Vroooom!');
  }

  startDrivingProcess() {
    this.drive();
  }
}

const carr = new Car2();
carr.startDrivingProcess();
// carr.honk();
