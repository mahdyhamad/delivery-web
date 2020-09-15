import {gql} from "apollo-angular";


export const CLIENT = gql`
  query client($id:ID!){
    client(id:$id){
      id,
      name,
      city,
      detailedAddress,
    }
  }
`;
