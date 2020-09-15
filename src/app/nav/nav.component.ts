import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    ) {}

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.logout();
    this.router.navigateByUrl('/login')
  }


}
