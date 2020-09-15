import {gql} from "apollo-angular";

export const CREATE_PACKAGE = gql`
  mutation createPackage($weight:Decimal!,$size:String!){
    createPackage(weight:$weight,size:$size){
      package{
        id
      }
    }
  }
`;

export const CREATE_SHIPMENT = gql`
  mutation creatShipment($clientId:ID!,$pickupUserId:ID!,$packageId:ID!){
    createShipment(clientId:$clientId, pickupUserId:$pickupUserId, packageId:$packageId){
      shipment{
        id
      }
    }
  }
`;

export const USER_PICKUP_SHIPMENTS = gql`
  query me{
  me{
    relatedPickupShipments{
      edges{
        node{
          id,
          created,
          client{
            id,
            name,
          },
          credentials{
            id,
            pickupCred
          },
          dropOffUser{
            id,
            fullName,
          }
        }
      }
    }
   }
  }
`;
