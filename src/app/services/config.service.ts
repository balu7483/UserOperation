import { Inject, inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigtoken } from './routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigtoken) private configToken:RouteConfig) { 
    console.log(this.configToken);
  }
}
