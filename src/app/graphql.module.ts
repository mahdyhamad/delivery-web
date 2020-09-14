import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {setContext} from "@apollo/client/link/context";
import {CookieService} from "ngx-cookie-service";

const uri = 'http://127.0.0.1:8000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink, cookieService: CookieService): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log(token)
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `${token}`
    },
  }));

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();
  return {
    link,
    cache
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
