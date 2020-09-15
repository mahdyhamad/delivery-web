import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Apollo} from "apollo-angular";
import {ALL_CLIENTS, ALL_USERS} from "../../graphql/user";
import {transformUsersData} from "../../utils/transformation/users";
import {transformClientsData} from "../../utils/transformation/clients";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  public dataList: any;
  private response: Object
  selected: object;
  public searchText: String = '';
  private query: any;

  @Output() selectItemEvent = new EventEmitter<object>();

  constructor(
    private apollo: Apollo,
  ) {

    this.apollo.watchQuery({
      query: ALL_CLIENTS,
      variables:{
        first: 10,
        searchText: this.searchText
      }
    }).valueChanges.subscribe(({data})=>{
      this.dataList = transformClientsData(data)
    })

  }

  ngOnInit(): void {
  }

  selectItem(item){
    this.selectItemEvent.emit(item)
  }

}
