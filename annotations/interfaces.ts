interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};

const oldCivic2 = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

// Long and ugly
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `);
};

// Replaced with interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `);
};

const printVehicle3 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle2(oldCivic2);
printVehicle3(oldCivic2);

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
