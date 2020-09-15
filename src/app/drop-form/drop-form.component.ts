import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Apollo} from "apollo-angular";
import {Router} from "@angular/router";
import {CREATE_PACKAGE, CREATE_SHIPMENT} from "../../graphql/shipment";

@Component({
  selector: 'app-drop-form',
  templateUrl: './drop-form.component.html',
  styleUrls: ['./drop-form.component.css']
})
export class DropFormComponent implements OnInit {
  private loading: boolean = false;
  public packageForm: FormGroup;
  private packageId;
  private pickupUserId: string;
  private storeId: string;
  isLinear = true;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo,
  ) {
    this.packageForm = this.fb.group({
      weight: ['', [Validators.required, ]],
      size: ['', [Validators.required, ]]
    })
  }

  ngOnInit(): void {}

  setStoreId(store: object): void{
    this.storeId = store['id'];
  }

  setPickupUserId(user: object): void{
    this.pickupUserId = user['id'];
  }

  async createPackage(): Promise<any>{
    return this.apollo.mutate({
      mutation: CREATE_PACKAGE,
      variables: {
        weight: this.packageForm.get('weight').value,
        size: this.packageForm.get('size').value,
      }
    }).toPromise()
  }

  async onCreateShipment(){
    this.loading = true;
    await this.createPackage().then(({data})=>{
      this.packageId = data['createPackage'].package.id;
    })
    await this.apollo.mutate({
      mutation: CREATE_SHIPMENT,
      variables: {clientId: this.storeId,
        pickupUserId: this.pickupUserId,
        packageId: this.packageId
      }
    }).subscribe(async ({ data })=>{
      console.log(data)
      this.router.navigateByUrl('/dashboard')
    })


  }

}

