import { Injectable } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TooneService {

  constructor(private router:Router) { }

  goto(val:any){
    let one: NavigationExtras = {
      queryParams:{'spid': val},
    }
    this.router.navigate(['/one'],one);
  }
}
