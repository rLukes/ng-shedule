import { Component, OnInit } from "@angular/core";
import { DataService } from "./shared/data.service";
import { ToastService } from "./../common/toastr.service";

@Component({
  selector: "event-list",
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private dataService: DataService,
    private toastrService: ToastService
  ) {}

  ngOnInit(): void {
    this.events = this.dataService.getEvents();
  }

  handleClick(data) {
    console.log(data);
    this.toastrService.success("Dfdf", "sss");
  }
}
