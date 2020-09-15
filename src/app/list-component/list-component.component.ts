import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ALL_USERS} from "../../graphql/user";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";
import {transformUsersData} from "../../utils/transformation/users";


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})

export class ListComponent implements OnInit {
  @Input() type: String
  @Output() selectedPickupUserEmitter = new EventEmitter<object>();
  public dataList: any;
  private response: Object
  public searchText: String = '';
  private query: any;

  constructor(
    private apollo: Apollo,
    private router: Router
  ) {

    this.apollo.watchQuery({
      query: ALL_USERS,
      nextFetchPolicy:"no-cache",
      variables:{
        first: 10,
        searchText: this.searchText
      }
    }).valueChanges.subscribe(({data})=>{
      this.dataList = transformUsersData(data)
    })
  }

  ngOnInit(): void {}

  selectPickupUser(user: object): void{
    this.selectedPickupUserEmitter.emit(user)
  }

}
