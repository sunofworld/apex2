import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public name:any;

  public headurl:any;

  public fl: any;

  constructor(private getdata:GetdataService, public alert: AlertController, private router: Router) { }

  async presentAlert() {
    const alert = await this.alert.create({
      message: "请登录！",
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getdata.getuserinfo("/userinfo/getinfo").subscribe((data:any) => {
      this.fl = data.json();
      
      if (this.fl.state == 0) {
        this.name="登录";
        this.headurl="http://10.100.234.54:8088/img/head/nologin.png"

      } else {
        this.name = this.fl.data[0].nickname;
        this.headurl = this.fl.data[0].headurl;
         
      }
    });
  }

  setClick(val: any){
  
    if (this.fl.state == 0) {
      this.presentAlert();
    } else {
      this.router.navigate([val])
    }
  }

}
