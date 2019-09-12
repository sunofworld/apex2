import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-changemb',
  templateUrl: './changemb.page.html',
  styleUrls: ['./changemb.page.scss'],
})
export class ChangembPage implements OnInit {
  public user: any = { uid: 15887755634, mbwt: "你在干什么？", mbda: "写代码", mm: "asdf123qwe" };

  public flag = 1;

  public mbda: any;

  public mm: any;

  public mbwt: any;


  constructor(public alertController: AlertController, public navController: NavController) { }

  async mbAlert() {
    const alert = await this.alertController.create({
      message: '密保答案错误！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async mmAlert() {
    const alert = await this.alertController.create({
      message: '密码错误！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async okAlert() {
    const alert = await this.alertController.create({
      message: '修改成功！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
      this.flag=1;
      this.navController.navigateForward("/zhanghao");
    }, 2000);
  }

  ngOnInit() {
  }

  step1() {
    if (this.mm!=this.user.mm) {
      this.mmAlert();
      this.mm=undefined;
      this.mbda=undefined;
    }
    if(this.mbda!=this.user.mbda && this.mbda!=undefined){
      this.mbAlert();
      this.mm=undefined;
      this.mbda=undefined;
    }
    if(this.mm==this.user.mm && this.mbda==this.user.mbda){
      this.mm=undefined;
      this.mbda=undefined;
      this.flag=2
    }
  }

  step2() {
    this.user.mbwt=this.mbwt;
    this.user.mbda=this.mbda;
    this.mbda=undefined;
    this.mbwt=undefined;
    this.okAlert();
  }
}
