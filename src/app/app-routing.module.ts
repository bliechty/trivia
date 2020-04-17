import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { LoginComponent } from './login/login.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component'

import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['log-in']);

const routes: Routes = [
  {
    path: 'set-up',
    component: SetupComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: 'log-in', component: LoginComponent },
  {
    path: 'game',
    component: GameInterfaceComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: '**', redirectTo: 'log-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
