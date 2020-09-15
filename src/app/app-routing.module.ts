import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DropFormComponent} from "./drop-form/drop-form.component";
import {PickupPageComponent} from "./pickup-page/pickup-page.component";
import {ClientPageComponent} from "./client-page/client-page.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client/:id', component: ClientPageComponent },
  { path: 'drop', component: DropFormComponent },
  { path: 'pickup', component: PickupPageComponent },
  { path: 'pickup/:id', component: PickupPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
