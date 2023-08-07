import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../User';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(user: User[],email:string): User[] {
    return user.filter((user=>user.email <=email));
  }

}
