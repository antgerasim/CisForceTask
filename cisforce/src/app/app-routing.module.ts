import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { UserlistComponent } from "./userlist/userlist.component";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UserlistComponent },
  { path: "user/:id", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
