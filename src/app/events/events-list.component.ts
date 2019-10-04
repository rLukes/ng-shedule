import { Component } from '@angular/core';

@Component({
    selector:'event-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent
{
    event = {
        id:1,
        name: "Java",
        date: "20.09.2019",
        time: "10:00",
        price: "5600",
        imageUrl: 'assets/images/java.png',
        location:{
            adress: '10511 DT',
            city: 'NY',
            country: 'England'
        }
    }
}