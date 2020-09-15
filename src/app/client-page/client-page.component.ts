import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {ActivatedRoute, Router} from "@angular/router";
import {CLIENT} from "../../graphql/client";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  public id: string;
  public clientData;
  constructor(private apollo: Apollo,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  async ngOnInit() {
    await this.activatedRoute.params.subscribe((params)=>{
      this.id = params.id;
    })
    try {
      await this.apollo.watchQuery({
        query: CLIENT,
        variables: {
          id: this.id,
          first:1,
        }
      }).valueChanges.subscribe(({data})=>{
        console.log(data)
        this.clientData = data
      })
    }
    catch (error) {
      console.log(error.message)
    }

  }

}
