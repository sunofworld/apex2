import { Component } from '@angular/core';
import { GetdataService } from '../services/getdata.service';
import { TooneService } from '../services/toone.service'
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public fenlei: any = ["小米","Apple", "Vivo", "OPPO","三星", "黑鲨", "诺基亚", "Sony"];

  public name: any = ["mi","iphone", "vivo", "OPPO","三星", "黑鲨", "诺基亚", "Sony"];

  public index = 0;

  public tuijian: any ;

  public aphone: any = this.fenlei[0];

  constructor(private getdata:GetdataService,private router:Router,private toone:TooneService) { }

  ngOnInit() { 
    this.getdata.geteach(this.name[0]).subscribe((data)=>{
      this.tuijian=data;
    });
  }

  getone(val: any) {
    this.index=val;
    this.aphone=this.fenlei[val];
    this.getdata.geteach(this.name[val]).subscribe((data)=>{
      this.tuijian=data;
    });
  }

  clicka(val:any) {
    this.toone.goto(val);
  }

  clickb(){
    let val:NavigationExtras = {
      queryParams:{'select':this.name[this.index]},
    };
    this.router.navigate(['/selectlist'],val)
  }
}
