import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodateService {

  public date:any;
  
  private y:any;

  private r:any;

  private s:any;

  private f:any;

  private m:any;

  constructor() { }

  getnow(val:any){
    if ((val.getMonth()+1)<10) {
      this.y='0'+(val.getMonth()+1);
    }else{
      this.y=val.getMonth()+1;
    }

    if (val.getDate()<10) {
      this.r='0'+val.getDate();
    }else{
      this.r=val.getDate();
    }
    
    if (val.getHours()<10) {
      this.s='0'+val.getHours();
    }else{
      this.s=val.getHours();
    }

    if (val.getMinutes()<10) {
      this.f='0'+val.getMinutes();
    }else{
      this.f=val.getMinutes();
    }

    if (val.getSeconds()<10) {
      this.m='0'+val.getSeconds();
    }else{
      this.m=val.getSeconds();
    }

    this.date=val.getFullYear()+'-'+this.y+'-'+this.r+' '+this.s+':'+this.f+':'+this.m;

    return this.date;
  }
}
