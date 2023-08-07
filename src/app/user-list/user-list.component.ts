import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { UserService } from '../user.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user:any;
  pipe!:FilterPipe

constructor(private service:UserService,private config:ConfigService) { }


ngOnInit(): void {
    this.service.getUsers().subscribe((data=>{
      this.user=data;
    }))
}
priceFilter = new FormControl('');

}