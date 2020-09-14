import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {SignupComponent} from "./signup/signup.component";
import {CookieService} from "ngx-cookie-service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropFormComponent} from "./drop-form/drop-form.component";
// Material Design
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {ListComponent} from "./list-component/list-component.component";
import {MatListModule} from "@angular/material/list";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SignupComponent,
    DashboardComponent,
    DropFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material
    MatSnackBarModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
