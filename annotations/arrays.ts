const carMakers: string[] = ['Toyota', 'Ford', 'Chevy'];
const dates: Date[] = [new Date(), new Date(), new Date()];

//* Array that contains array of strings (2d array)
const carsByMake: string[][] = [['f150'], ['corola'], ['camaro']];

//* Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//* Prevent incompatible values
// carMakers.push(5);

//* Help with map
carMakers.map((car: string): string => car.toUpperCase());

//* Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2022-10-10');
importantDates.push(new Date());
