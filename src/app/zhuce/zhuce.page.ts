import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zhuce',
  templateUrl: './zhuce.page.html',
  styleUrls: ['./zhuce.page.scss'],
})
export class ZhucePage implements OnInit {

  public reg: any = /^1[3|4|5|7|8][0-9]{9}/;

  public uid:any;

  public password1:any;

  public password2:any;

  public mb1:any;

  public mb2:any;

  public fr:any;

  constructor(public alert: AlertController,private getdata:GetdataService,private router:Router) { }

  async presentAlert1(val:any) {
    const alert = await this.alert.create({
      message: val,
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async presentAlert2(val:any) {
    const alert = await this.alert.create({
      message: val,
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/denglu'])
    }, 2000);
  }

  ngOnInit() {
  }

  onClick(){
    if (!this.reg.test(this.uid)) {
      this.presentAlert1("账号不符合规范");
      return;
    }
    if (!this.password1) {
      this.presentAlert1("请输入密码");
      return;
    }
    if (this.password1!=this.password2) {
      this.presentAlert1("密码不一致");
      return;
    }
    let user:any = {userid: this.uid,password:this.password1,mbwt:this.mb1,mbda:this.mb2}
    this.getdata.registered(user).subscribe((result)=>{
      this.fr = result;
      if (this.fr=="1") {
      this.uid=undefined;
      this.password1=undefined;
      this.password2=undefined;
      this.mb1=undefined;
      this.mb2=undefined;
      this.fr=undefined;
      this.presentAlert2("注册成功！");
    } else {
      this.presentAlert1("账号已被注册！");
    }
    });
  }

}
