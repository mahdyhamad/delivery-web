import {gql} from "apollo-angular";

export const LOGIN = gql`
  mutation login($username:String!,$password:String!){
    tokenAuth(username:$username,password:$password){
      token
    }
  }
`;


export const ALL_USERS = gql`
  query allUsers($first:Int!, $searchText:String!){
    users(first:$first, firstName_Icontains:$searchText){
      edges{
        node{
          id,
          fullName,
          username
        }
      }
    }
  }
`;

export const ALL_CLIENTS = gql`
query allClients($first:Int!, $searchText:String!){
  clients(first:$first, city_Icontains: $searchText){
    edges{
      node{
        id,
        name,
        city,
        detailedAddress,
      }
    }
  }
}

`;
