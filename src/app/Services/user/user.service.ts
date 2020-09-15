import {Apollo, gql} from "apollo-angular";
import {Injectable} from "@angular/core";

export const USER = gql`
  query user{
    me{
      id,
      firstName,
      lastName,
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: object;
  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({
      query: USER
    }).valueChanges.subscribe(({data})=>{
      this.user = data['me'];
      console.log(this.user)
    })
  }
}
