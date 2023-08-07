import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { loginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { registerGuard } from './register.guard';

const routes: Routes = [
  { path: 'emp-list', component: EmployeeComponent,},//canActivate: [loginGuard] },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'user', loadChildren: () => import('./User/user.module').then((m) => m.UserModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./User/booking/booking.module').then(m => m.BookingModule) },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },//canActivate:[registerGuard]},
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
