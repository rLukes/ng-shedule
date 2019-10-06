import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event.image {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  //+ cast to number
  ngOnInit(): void {
    this.event = this.dataService.getEvent(+this.route.snapshot.params["id"]);
  }
}
