import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {



  constructor(private http:HttpClient) { }

  getcomments(){
    return this.http.get<comments[]>("https://jsonplaceholder.typicode.com/comments")
  }
}
