import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {
  public id: string;
  constructor(private apollo: Apollo,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.id = params.id

    })
  }

}
