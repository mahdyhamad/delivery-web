import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {LOGIN} from "../../graphql/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: Boolean = false;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private apollo: Apollo,
    private cookieService: CookieService
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, ]],
      password: ['', [Validators.required, ]]
    })
  }

  ngOnInit(): void {

  }

  async login(): Promise<any>{
    this.loading = true;
    const res = await this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      }
    })
    try {
      res.subscribe((data)=>{
        const token = data.data['tokenAuth'].token;
        this.cookieService.set('token', 'JWT ' + token);
        localStorage.setItem('token', 'JWT ' + token);
        this.route.navigateByUrl('/');
      })
    }
    catch (e) {
      console.log(e.message)
    }
  }

}
