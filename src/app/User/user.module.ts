import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from '../user-list/user-list.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserBookingComponent } from '../user-booking/user-booking.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    UserBookingComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
