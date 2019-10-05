import { Component, OnInit } from "@angular/core";
import { DataService } from "./shared/data.service";

@Component({
  selector: "event-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }

  handleClick(data) {
    console.log(data);
  }
}
