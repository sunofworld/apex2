import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-changemm',
  templateUrl: './changemm.page.html',
  styleUrls: ['./changemm.page.scss'],
})
export class ChangemmPage implements OnInit {

  public user: any = { uid: 15887755634, mbwt: "你在干什么？", mbda: "写代码", mm: "asdf123qwe" };

  public flag = 1;

  public mbda: any;

  public ymm: any;

  public xmm: any;

  public rxmm: any;

  constructor(public alertController: AlertController, public navController: NavController) { }

  async mbAlert() {
    const alert = await this.alertController.create({
      message: '回答错误！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async ymmAlert() {
    const alert = await this.alertController.create({
      message: '原密码错误！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async xmmAlert() {
    const alert = await this.alertController.create({
      message: '新密码不一致！'
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
      this.navController.navigateForward("/zhanghao");
    }, 2000); 
  }

  ngOnInit() {
  }

  step1() {
    if (this.mbda == this.user.mbda) {
      this.flag = 2;
      this.mbda=undefined;
    } else {
      this.mbAlert();
    }
  }

  step2() {
    
    if (this.ymm != this.user.mm) {
      this.ymmAlert();
      this.ymm=undefined;
      this.xmm=undefined;
      this.rxmm=undefined;  
    } 
    if (this.xmm != this.rxmm) {
      this.xmmAlert();
      this.ymm=undefined;
      this.xmm=undefined;
      this.rxmm=undefined;
    } 
    if(this.ymm == this.user.mm && this.xmm == this.rxmm && this.xmm!=undefined) {
      this.ymm=undefined;
      this.xmm=undefined;
      this.rxmm=undefined;
      this.flag=1;
    }
  }

}
