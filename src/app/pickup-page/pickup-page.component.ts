import {Component, Input, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";
import {USER_PICKUP_SHIPMENTS} from "../../graphql/shipment";

@Component({
  selector: 'app-pickup-page',
  templateUrl: './pickup-page.component.html',
  styleUrls: ['./pickup-page.component.css']
})
export class PickupPageComponent implements OnInit {
  public items;
  constructor(
    private apollo: Apollo,
    private router: Router,
  ) {
    this.apollo.watchQuery({
      query: USER_PICKUP_SHIPMENTS,
    }).valueChanges.subscribe(({data})=>{
      console.log(data)
      this.items = data['me'].relatedPickupShipments.edges
    })
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'ShipmentItem',
  template: `

    <div class="box shadow-sm">
      <div class="row">
        <div class="col-sm index" >
          <i class="fas fa-hashtag"></i> {{index+1}}
        </div>
      </div>
        <div class="row">
          <div class="col-sm-10">
            <h3><strong>
              <i class="fas fa-chevron-circle-right"></i>
              From:</strong> {{item['node'].dropOffUser.fullName}}</h3>
          </div>
          <div class="col-sm-2">
            <small style="opacity: 50%">created: {{item['node'].created.split('T')[0]}}</small>
          </div>
        </div>

      <h3 [routerLink]="'/client/'+item['node'].client.id" class="hover-pointer">
        <strong>
        <i class="fas fa-store"></i>
        Store:</strong> {{item['node'].client.name}}
      </h3>
      <div class="row">
        <div class="col-sm"  style="color: dodgerblue; font-size: large">
          <i class="fas fa-key"></i> Key: {{item['node'].credentials.pickupCred}}
        </div>
      </div>
      <br/>
    </div>
  `,
  styles: [
    '.box{ border-radius: 10px; background-color: white; padding: 20px; margin: 5px}',
    '.index{ opacity: 20%; font-size: 20px; margin-bottom: 5px}',
    '.hover-pointer:hover{cursor: pointer;}'
  ]
})
export class ShipmentsItem implements OnInit{

  @Input() item: object;
  @Input() index: number;

  ngOnInit(): void {
    console.log(this.item)
  }

}
