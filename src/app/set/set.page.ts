import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';


@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  public newnick:any;
  public name:any;
  public headurl:any;

  public address:any=[
    
  ];

  constructor(public alertController: AlertController, private getdata:GetdataService) { }

  ionViewWillEnter(){
    this.getdata.getuserinfo("/userinfo/getinfo").subscribe((data:any) => {
      let fl: any = data.json();
      console.log(fl);
      
      
      if (fl.state == 0) {
        this.name="登录";
        this.headurl="http://10.100.234.54:8088/img/head/nologin.png"

      } else {
        this.name = fl.data[0].nickname;
        this.headurl = fl.data[0].headurl;
        // this.address.push(fl.data[0].sh1);
        // this.address.push(fl.data[0].sh2);
        // this.address.push(fl.data[0].sh3);
         
      }
    });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: '输入新的昵称!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          max: 7,
          placeholder: 'Love life!'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: '确定',
          handler: data => {
            this.newnick=data.name1;
            let val: any = {'nickname': this.newnick};
            this.getdata.changename(val).subscribe((data:any) => {
              this.name=this.newnick;
              console.log(data.json());
              
            })  
          }
        }
      ]
    });

    await alert.present();
  }

  async addwarinAlert(){
    const alert = await this.alertController.create({
      message:'最多只能添加3个地址哦！'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  async addressAlert(){
    const alert = await this.alertController.create({
      header:'请输入新的地址！',
      inputs:[
        {
          name:'name2',
          type:'text',
          placeholder:'Love world!',
          max:25
        }
      ],
      buttons:[
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: '确定',
          handler: data => {
            this.address.push(data.name2);
            // let val:any = {'sh1': this.address[0],'sh2': this.address[1],'sh3': this.address[2]}
            // this.getdata.changename(val).subscribe((data:any) => {
            //   console.log(data.json());
            // })  
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  changenick(){
    this.presentAlertPrompt();
  }

  daddress(key){
    this.address.splice(key,1);
    // let val:any = {'sh1': this.address[0],'sh2': this.address[1],'sh3': this.address[2]}
    //         this.getdata.changename(val).subscribe((data:any) => {
    //           console.log(data.json());
    //         }) 
  }

  addadress(){
    if (this.address.length>=3) {
      this.addwarinAlert();
    } else {
      this.addressAlert();
    }
  }

}
