import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { CustomValidation } from './validators/custom-validation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingform!: FormGroup
  get seller() {
    return this.bookingform.get('seller') as FormArray;
  }

  constructor(private fb: FormBuilder,private bookservice:BookingService) { }

  ngOnInit(): void {
    this.bookingform = this.fb.group({
      productId: new FormControl('',{validators:[Validators.required]}),
      productName: new FormControl('',{validators:[Validators.required,
        Validators.minLength(3),
        CustomValidation.ValidateName,
        CustomValidation.validateSpecialCharacter('*')
      ]}),
      productPrice: new FormControl('',{validators:[Validators.required]}),
      procuctType: new FormControl(''),
      Details: this.fb.group({
        importedDate: new FormControl(''),
        exportDate: new FormControl(''),
        importedFrom: new FormControl('' ),
        serailNumber: new FormControl('', {validators:[Validators.required,Validators.minLength(5),Validators.maxLength(7)]}),
      }),
      seller: this.fb.array([this.addsellerController()]),
      tnc: new FormControl(false,{validators:[Validators.requiredTrue]}),
    },)
  }

  addsellerController(){
    return this.fb.group({ sellerName: new FormControl('',{validators:[Validators.minLength(5),Validators.required]}), sellerAge: new FormControl() });
  }
  addProduct() {
    console.log(this.bookingform.getRawValue());
    this.bookservice.bookUser(this.bookingform.getRawValue()).subscribe((data)=>{ this.bookservice.bookUser(data) })
    
  }
  addSeller() {
    this.seller.push(this.addsellerController())

  }
  addPassPort() {
    this.bookingform.addControl('passport', new FormControl(''))
  }
  removePassport() {
    if (this.bookingform.get('passport')) {
      this.bookingform.removeControl('passport');
    }
  }
  removeSeller(i:number){
    this.seller.removeAt(i)
  }
}

