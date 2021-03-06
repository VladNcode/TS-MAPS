import faker from '@faker-js/faker';

export class Company {
  companyName: string;
  catchFrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchFrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h2>Company Name: ${this.companyName}</h2>
    <h3>Catch frase: ${this.catchFrase}</h3>
    </div>
    `;
  }
}
