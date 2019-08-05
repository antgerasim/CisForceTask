import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CachingInterceptor } from "./caching/caching-interceptor";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { RequestCache } from "./service/request-cache";
import { RequestCacheWithMap } from "./service/request-cache.service";
import { UserComponent } from "./user/user.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { httpInterceptorProviders } from "./caching/index";

@NgModule({
  declarations: [AppComponent, UserlistComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
