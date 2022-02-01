/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const map = new CustomMap('map');

const user = new User();
const company = new Company();

const userMarker = map.addMarker(user);
const companyMarker = map.addMarker(company);

map.addMarkerInfo(userMarker, user.markerContent());
map.addMarkerInfo(companyMarker, company.markerContent());
