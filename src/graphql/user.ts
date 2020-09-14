import {gql} from "apollo-angular";

export const LOGIN = gql`
  mutation login($username:String!,$password:String!){
    tokenAuth(username:$username,password:$password){
      token
    }
  }
`;
