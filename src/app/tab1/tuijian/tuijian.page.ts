import { Component, OnInit } from '@angular/core';
import { TodateService } from '../../services/todate.service';
import { GetdataService } from '../../services/getdata.service';
import { TooneService } from '../../services/toone.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-tuijian',
  templateUrl: './tuijian.page.html',
  styleUrls: ['./tuijian.page.scss'],
})
export class TuijianPage implements OnInit {

  public rexiao:any;

  public tuijian:any;

  constructor(private todate: TodateService,private getdata:GetdataService,public http:HttpClient,private toone:TooneService) { }

  ngOnChanges(){
    console.log("ngOnChanges");
    
  }

  ngOnInit() {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    // this.http.post("http://10.100.151.22:8088/commodityinfo/hotcommodity", httpOptions).subscribe((user: any) => {
    //   this.rexiao = user;
    // });
    this.getdata.getjsondata("http://10.100.234.54:8088/commodityinfo/hotcommodity").subscribe((data)=>{
      this.rexiao=data;
      
    });

    this.getdata.getjsondata("http://10.100.234.54:8088/commodityinfo/tjcommodity").subscribe((data)=>{
      this.tuijian=data;
    });

  }

  ngDoCheck(){
    
  }

  ngAfterContentInit(){
    
  }

  ngAfterContentChecked(){
    
  }

  ngAfterViewInit(){
    
  }

  ngAfterViewChecked(){
    
  }

  ngOnDestroy(){
    
  }

  clicka(val:any){
    this.toone.goto(val);
  }

  clickb(){
  }
}
