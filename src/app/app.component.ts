import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {}
  title = 'delivery-web-app';
}
