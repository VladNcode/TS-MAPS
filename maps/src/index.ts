/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const map = new CustomMap('map');
map.addMarker(user);
const marker = map.addMarker(company);

map.addMarkerInfo(marker, 'This is a test!');
