import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './emailValidator/email-validator.directive';
import { UserModule } from './User/user.module';
import { RouteConfigtoken } from './services/routeConfig.service';
import { FilterPipe } from './user-list/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AppNavComponent,
    NavBarComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
    FilterPipe,
  ],
  exports:[
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [{
    provide : RouteConfigtoken,
    useValue : { title: 'home' },
  },
  {provide: ErrorHandler,
   useClass: ErrorHandler
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
