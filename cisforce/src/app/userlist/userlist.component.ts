import { Component, OnInit } from "@angular/core";

import { NgxCollection } from "./ngxcollection.model";
import { NgxConfig } from "./ngxconfig.model";
import { NgxLimitIndex } from "./NgxLimitIndex.model";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  public config: NgxConfig;
  public collection: NgxCollection;
  public pageLimitAndIndex: NgxLimitIndex;

  //totalMemberCount = 0;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.pageLimitAndIndex = { limit: 20, index: 0 };
    this.collection = { count: 60, data: [] };

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    this.getList(this.pageLimitAndIndex);
  }

  public pageChanged(page: number): void {
    this.pageLimitAndIndex.index = page - 1;
    this.getList(this.pageLimitAndIndex);
  }

  private getList(params: NgxLimitIndex = null): void {
    let data = null;
    if (params != null) {
      data = params;
    }

    this.userService.getUsers(data.index).subscribe(userListResp => {
      this.collection.data = userListResp.data;
      this.config = {
        itemsPerPage: userListResp.per_page,
        currentPage: userListResp.page,
        totalItems: userListResp.total
      };
    });
  }
}
