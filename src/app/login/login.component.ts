import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.mutate({
      mutation: gql`
        mutation login($username:String!,$password:String!){
          authToken(username:$username,password:$password){
            token
          }
        }
      `,
    })
  }

}
