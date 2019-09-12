import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TooneService } from '../services/toone.service'
import { GetdataService } from '../services/getdata.service'

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.page.html',
  styleUrls: ['./selectlist.page.scss'],
})
export class SelectlistPage implements OnInit {

  public commoditylist:any;

  constructor( private route: ActivatedRoute,private toone:TooneService,private getdata:GetdataService) { }

  public val:any;

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{ 
      this.getdata.getlist(data.select).subscribe((list)=>{
        this.commoditylist=list;
      });
    });
  }

  onClick(val:any){
    this.toone.goto(val);
  }
}
