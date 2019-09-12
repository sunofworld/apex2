import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {

  public select:any;

  constructor( public router: Router ) { }

  ngOnInit() {}

  doserch(e){
    
    if (e.keyCode==13&&this.select) {
      let val: NavigationExtras = {
        queryParams:{'select': this.select},
      }
      this.select=undefined;
      this.router.navigate(['/selectlist'],val);
    }
  }

  test(){
    alert("asasa");
  }

}
