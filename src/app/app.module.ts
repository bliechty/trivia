import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupComponent } from './setup/setup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SameAmountValidatortDirective } from './setup/same-amount.directive';
import { PlayerDialogComponent } from './setup/player-dialog/player-dialog.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { Resolver } from './setup/resolver';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    LoginComponent,
    SameAmountValidatortDirective,
    PlayerDialogComponent,
    GameInterfaceComponent,
    UserStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [Resolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
