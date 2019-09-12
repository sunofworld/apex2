import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {

  public commodity:any;
  public img:any=[];
  public cid:any;
  public num:number=0;

  constructor(private router:ActivatedRoute,private getdata:GetdataService, public alert: AlertController) { }

  ngOnInit() {
    this.router.queryParams.subscribe(data =>{ 
      this.cid = data.spid;
      this.getdata.getone(data.spid).subscribe((d:any)=>{
        this.commodity=d;
        this.img.push(d.img1); 
        this.img.push(d.img2);
        this.img.push(d.img3);
      })
    });
  }

  async presentAlert(val: any) {
    const alert = await this.alert.create({
      message: val,
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }

  add1(){
    this.num=this.num+1;
  }

  remove1(){
    if (this.num>0) {
      this.num=this.num-1;
    }
  }

  joinshopping(){
    this.getdata.getuserinfo("/userinfo/getinfo").subscribe((result: any) => {
      let fl = result.json();
      if (fl.state == 0) {
        this.presentAlert('请登录！');
      } else {
        if (this.num==0) {
          this.presentAlert('请选择数量！');
        } else {
          let val: any = {'cid': this.cid,'cnumber': this.num}
        this.getdata.joinshopping(val).subscribe((result: any) => {
          let state = result.json();
          console.log(state);
          
          if (state.state == 0) {
            this.presentAlert('加入失败！');
          } else {
            this.presentAlert('加入成功！');
            this.num=0;
          }
        })
        }  
      }
    })
  }

  // buy() {
  //   this.getdata.getuserinfo("/userinfo/getinfo").subscribe((result: any) => {
  //     let fl = result.json();
  //     if (fl.state == 0) {
  //       this.presentAlert('请登录！');
  //     } else {
  //       if (this.num==0) {
  //         this.presentAlert('请选择数量！');
  //       } else {
  //         let val: any = {'cid': this.cid, 'num': this.num, 'oneprice': this.commodity.oneprice, 'price': this.num*this.commodity.oneprice}
  //         console.log(val);
          
  //         this.getdata.buy(val).subscribe((result: any) => {
  //         let state = result.json();
  //         console.log(state);
          
  //       })
  //       }  
  //     }
  //   })
  // }
 

}
