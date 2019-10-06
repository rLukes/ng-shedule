import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  getEvents() {
    return EVENTS;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}

const EVENTS = [
  {
    id: 1,
    name: "Java",
    date: "20.09.2019",
    time: "10:00",
    price: "5600",
    imageUrl: "assets/images/java.png",
    location: {
      adress: "10511 DT",
      city: "NY",
      country: "England"
    }
  },
  {
    id: 1,
    name: "Angular",
    date: "10.06.2020",
    time: "11:00",
    price: "8600",
    imageUrl: "assets/images/java.png",
    location: {
      adress: "IU1 DT",
      city: "Paris",
      country: "France"
    }
  }
];
