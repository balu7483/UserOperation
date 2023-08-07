import { Component } from '@angular/core';
import { employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
emp:employee[]=[
  {
    id:1,
    name:'Ram',
    password:'ramu',
    email:'ram@gmail.com',
    phonenumber:'8509865353',
    status:0
  },
  {
    id:2,
    name:'rahim',
    password:'rahim',
    email:'rahim@123',
    phonenumber:'8536479852',
    status:0
  }
]
}
