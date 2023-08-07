import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { registerGuard } from '../register.guard';
import { UserBookingComponent } from '../user-booking/user-booking.component';
import { UserListComponent } from '../user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
    children: [

      { path: ':id', component: UserBookingComponent  }
    ],
  },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class UserRoutingModule { }
