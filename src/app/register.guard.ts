import { CanActivateFn } from '@angular/router';
import { LoginService } from './login/login.service';

export const registerGuard: CanActivateFn = (route, state) => {
  return true;

};

