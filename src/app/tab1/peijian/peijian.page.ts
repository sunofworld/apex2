import { Component, OnInit, } from '@angular/core';
import { GetdataService } from '../../services/getdata.service'

@Component({
  selector: 'app-peijian',
  templateUrl: './peijian.page.html',
  styleUrls: ['./peijian.page.scss'],
})
export class PeijianPage implements OnInit {

  public cdq:any;
  public sjm:any;
  public cdb:any;

  constructor(private getdata:GetdataService) { }

  ngOnInit() {
    this.getdata.getparts("移动电源").subscribe((data)=>{
      this.cdb=data;
    });
    this.getdata.getparts("充电器").subscribe((data)=>{
      this.cdq=data;
    });
    this.getdata.getparts("手机膜").subscribe((data)=>{
      this.sjm=data;
    });
  }

  clicka() {
    alert("暂无服务");
  }

}
