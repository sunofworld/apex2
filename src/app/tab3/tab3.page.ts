import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public gwc: any ;

  public num:any;

  public flag: boolean = true;
  public pric: number = 0;
  public clist: any[] = [];

  constructor(public alert: AlertController, private getdata: GetdataService, private router: Router) { }

  async presentAlert() {
    const alert = await this.alert.create({
      message: "请登录！",
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/denglu']);
    }, 2000);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getdata.getuserinfo("/shopping/get").subscribe((data:any) => {
      let fl: any = data.json();

      if (fl.state == 0) {
        this.presentAlert();
      } else {
        this.gwc = fl.data;
        
      }
    });
  }

  ionViewDidEnter(){
    
  }

  ionViewWillLeave(){
    
  }

  ionViewDidLeave(){
   
  }

  changeflag() {
    this.flag = !this.flag;
  }

  dochange($event, key) {
    if ($event.detail.checked) {
      this.pric = this.pric + this.gwc[key].oneprice;
      this.clist.push(key);
    } else {
      this.pric = this.pric - this.gwc[key].oneprice;
      for (let index = 0; index < this.clist.length; index++) {
        if (this.clist[index] == key) {
          this.clist.splice(index, 1);
          break;
        }

      }
    }
  }

  del() {
    for (let index = 0; index < this.clist.length; index++) {
      delete this.gwc[this.clist[index]];
    }
    for (let index = 0; index < this.gwc.length; index++) {
      if (this.gwc[index] == undefined) {
        this.gwc.splice(index, 1);
        index = index - 1;
      }
    }
    this.clist = [];
    this.pric = 0;
  }

  jiesuan() {
    for (let index = 0; index < this.clist.length; index++) {
      console.log(this.gwc[this.clist[index]]);

    }

  }
}
