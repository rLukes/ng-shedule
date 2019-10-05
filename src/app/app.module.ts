import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event.thumbnail.component";
import { NavbarComponent } from "./nav/navbar.component";
import { DataService } from "./events/shared/data.service";
import { ToastService } from "./common/toastr.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [BrowserModule],
  providers: [DataService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
