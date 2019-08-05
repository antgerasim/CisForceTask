import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { User } from "./user.model";
import { UserService } from "./../service/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.getUser();
  }

  public goBack(): void {
    this.location.back();
  }

  private getUser(): void {
    const userId = +this.route.snapshot.paramMap.get("id");
    this.userService.getUser(userId).subscribe(userResp => {
      this.user = userResp.data;
    });
  }
}
