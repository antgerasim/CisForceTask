import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { AppSettings } from "./../common/app-settings";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserListResp } from "../userlist/userlist.model";
import { UserResp } from "../user/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(index: number): Observable<UserListResp> {
    const page = index + 1;
    const url = `${AppSettings.API_URL}?page=${page}`;

    return this.http.get<UserListResp>(url).pipe(
      tap(_ => this.log(`fetched userList page=${page}`)),
      catchError(this.handleError<UserListResp>(`getUsers page=${page}`))
    );
  }

  public getUser(id: number): Observable<UserResp> {
    const url = `${AppSettings.API_URL}/${id}`;

    return this.http.get<UserResp>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<UserResp>(`getUser id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
