import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = {
    name:'',
    password:'',
    email:'',
    phonenumber:'',
    status:0
  };
  



  message ='';

  constructor(private service:UserService) { }


  ngOnInit(): void {
     
  }

  addUser(userForm:NgForm){
    this.service.adduser(this.user).subscribe((data=>{
      userForm.reset();
    }))
    return this.message='User Added Successfully';
  }
}
