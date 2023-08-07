import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { CommentService } from './comment.service';
import { comments } from './comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

comments$=this.service.getcomments();
comment$=this.route.data.pipe(pluck('comments'))

constructor(private service:CommentService,private route:ActivatedRoute){

}
ngOnInit(): void {
   this.route.data.subscribe((data=>{
    console.log(data['comments']);
   }));
}

getComments(){

}

}
