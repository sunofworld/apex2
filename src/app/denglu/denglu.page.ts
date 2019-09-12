import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denglu',
  templateUrl: './denglu.page.html',
  styleUrls: ['./denglu.page.scss'],
})
export class DengluPage implements OnInit {

  public uid: any;
  public password: any;
  public reg: any = /^1[3|4|5|7|8][0-9]{9}/;
  public data:any;

  constructor(public alert: AlertController,private getdata:GetdataService,private router:Router) { }

  async presentAlert(val:any) {
    const alert = await this.alert.create({
      message: val,
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  ngOnInit() {
  }

  sup() {
    if (!this.reg.test(this.uid)) {
      this.presentAlert('请输入正确的用户名！');
    } else {
      let user = {userid:this.uid,password:this.password}
      this.getdata.login(user).subscribe((result:any)=>{
        this.data=result.json();
        console.log(result.json());
        
        if (this.data.state==0) {
          this.presentAlert('用户名或密码错误！')
        } else {
          this.router.navigate(['/tabs'])
          
        }  
      })
    }
  }

}
