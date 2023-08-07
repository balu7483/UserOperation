import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='http://localhost:8089/api/user/'

  getUser$=this.http.get(this.apiUrl);

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get(this.apiUrl);
  }

  public adduser(user:User){
    return this.http.post(this.apiUrl,user);
  }

  public getUserById(id:any){
    return this.http.get(this.apiUrl+id).pipe();
  }
}
