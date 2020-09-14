import {Component, Input, OnInit} from '@angular/core';
import {ALL_USERS} from "../../graphql/user";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";
import {transformUsersData} from "../utils/transformation/users";


export const queryList = [
  {
    type: 'users',
    queryType: ALL_USERS
  },
]


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})

export class ListComponent implements OnInit {
  @Input()
  type: String

  public dataList: any;
  private response: Object
  public searchText: String = '';

  constructor(
    private apollo: Apollo,
    private router: Router,
    ) {

    this.apollo.watchQuery({
      query: ALL_USERS,
      variables:{
        first: 10,
        searchText: this.searchText
      }
    }).valueChanges.subscribe(({data})=>{
      this.dataList = transformUsersData(data)
    })
  }

  ngOnInit(): void {
  }

}
