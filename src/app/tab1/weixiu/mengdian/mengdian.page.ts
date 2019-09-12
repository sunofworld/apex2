import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mengdian',
  templateUrl: './mengdian.page.html',
  styleUrls: ['./mengdian.page.scss'],
})
export class MengdianPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  sekey: any;
  sikey: any;

  flag: any = 0;

  se: any = [
    {
      shen: "云南",
      next: [{ shi: "昆明", next: [{ dian: "呈贡店" }, { dian: "西山店" }, { dian: "官渡店" }] },
      { shi: "楚雄", next: [{ dian: "鹿城店" }, { dian: "元谋店" }] }
      ]
    },
    {
      shen: "山东",
      next: [
        { shi: "青岛", next: [{ dian: "C店" }, { dian: "D店" }, { dian: "E店" }] }
      ]
    },
  ];

  si: any;
  d: any;

  next1() {
    this.si = this.se[this.sekey].next;
    this.sikey = undefined;
    this.flag = 0;
  }
  next2() {
    try {
      this.d = this.si[this.sikey].next;
    } catch (error) {
      this.d = undefined;
    }
  }
  async display() {
    if (this.d) {
      this.flag = 1;

    } else {
      const alert = await this.alertController.create({
        message: '请选择正确的地点。',
        buttons: ['确定']
      });
      await alert.present();
    }

  }

}
