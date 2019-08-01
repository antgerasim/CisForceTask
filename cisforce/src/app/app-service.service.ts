import { AppPage } from "./../../e2e/src/app.po";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppServiceService {
  //private url = "https://reqres.in/api/users?page=";

  constructor(private httpClient: HttpClient) {}

  public getUsers(index: number) {
    const page = index + 1;
    return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
  }

  public getUser(id: number) {
    //return this.httpClient.get(`https://reqres.in/api/users?id=${id}`);
    return this.httpClient.get(`https://reqres.in/api/users/${id}`);
  }
}
