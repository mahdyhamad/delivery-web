import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated():boolean{
    if (localStorage.getItem('token')){
      return true;
    } else{
      return false;
    }
  }
  public logout():void {
    this.apollo.client.resetStore();
    localStorage.removeItem('token')
  }
  constructor(private apollo: Apollo) {



  }

}
