import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event.image: {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.event = this.dataService.getEvent(1);
  }
}
