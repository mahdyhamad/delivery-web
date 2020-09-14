import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-drop-form',
  templateUrl: './drop-form.component.html',
  styleUrls: ['./drop-form.component.css']
})
export class DropFormComponent implements OnInit {
  private packageForm: FormGroup;
  private pickupUserId: String;
  private storeId: String;

  //
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.packageForm = this.fb.group({
      type: ['', [Validators.required, ]],
      weight: ['', [Validators.required, ]],
      size: ['', [Validators.required, ]]
    })
  }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
