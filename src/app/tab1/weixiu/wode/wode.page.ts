import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wode',
  templateUrl: './wode.page.html',
  styleUrls: ['./wode.page.scss'],
})
export class WodePage implements OnInit {

  public myfix: any = [
    { miaoshu: "屏幕碎了", zhuangtai: 1, shijian: "2019年12月1日", leixing: "上门维修", person: "XXX" },
    { miaoshu: "屏幕碎了", zhuangtai: 2, shijian: "2019年12月1日", leixing: "上门维修", person: "XXX" },
    { miaoshu: "屏幕碎了", zhuangtai: 3, shijian: "2019年12月1日", leixing: "上门维修", person: "XXX" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
