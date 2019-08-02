import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { AppServiceService } from "../app-service.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: any = {};

  constructor(
    private appService: AppServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("id"));
      const userId = Number(params.get("id"));
      this.appService.getUser(userId).subscribe((result: any) => {
        console.log(result.data);
        this.user = result.data;
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
