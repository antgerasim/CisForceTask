import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { UserlistComponent } from "./userlist/userlist.component";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UserlistComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
