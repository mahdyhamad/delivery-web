import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    let res = this.apollo.mutate({
      mutation: gql`
        mutation login($username:String!,$password:String!){
          tokenAuth(username:$username,password:$password){
            token
          }
        }
      `,
      variables: {
        username: 'mahdyhamad45@gmail.com',
        password: 'mahdyhamad45'
      }
    }).subscribe((data)=>{
      console.log(data)
    })
    console.log(res)
  }
  title = 'delivery-web-app';
}
