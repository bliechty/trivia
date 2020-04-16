import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SetupComponent } from "./setup/setup.component";
import { LoginComponent } from "./login/login.component";
import { GameInterfaceComponent } from "./game-interface/game-interface.component"

const routes: Routes = [
  {
    path: "set-up",
    component: SetupComponent,
  },
  { path: "log-in", component: LoginComponent },
  { path: "game", component: GameInterfaceComponent},
  { path: "**", redirectTo: "log-in" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
