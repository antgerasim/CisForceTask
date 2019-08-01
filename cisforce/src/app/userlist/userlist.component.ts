import { Component, OnInit } from "@angular/core";

import { AppServiceService } from "../app-service.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  config: any;
  collection = { count: 60, data: [] };
  // --
  public pageLimitAndIndex = { limit: 20, index: 0 };
  p = 1;

  totalMemberCount = 0;

  constructor(private appService: AppServiceService) {}

  ngOnInit() {
    // Create dummy data
    // tslint:disable-next-line: no-var-keyword
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        // tslint:disable-next-line: quotemark
        value: "items number " + (i + 1)
      });
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    this.getList(this.pageLimitAndIndex);
  }

  /*   pageChanged(event) {
    this.config.currentPage = event;
  } */

  pageChanged(page) {
    console.log(page);
    this.pageLimitAndIndex.index = page - 1;
    this.getList(this.pageLimitAndIndex);
  }

  // tslint:disable-next-line: ban-types
  getList(params: Object = null) {
    let data = null;
    if (params != null) {
      data = params;
    }
    this.totalMemberCount = 0;
    console.log(data);
    this.appService.getUsers(data.index).subscribe(result => {
      console.log(result);
      // this.members = result.total;
      //this.totalMemberCount = result.total;
      //this.p = result.page + 1;
      this.collection.data = result.data;

      this.config = {
        itemsPerPage: result.per_page,
        currentPage: result.page,
        totalItems: result.total
      };
    });
  }
}
