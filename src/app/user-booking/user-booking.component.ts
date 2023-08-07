import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  map } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit  {
  id!:number;
  userdata:any;

  

  constructor(private router:ActivatedRoute,private userservice:UserService){ 
    this.router.params.subscribe((params=>{this.id = params['id']}));
    this.userservice.getUserById(this.id).subscribe((data=>{this.userdata=data}));

  }
  
  

  ngOnInit(): void {
    
     
  }
 
 
  
  }
  

