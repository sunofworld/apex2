import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yuyue',
  templateUrl: './yuyue.page.html',
  styleUrls: ['./yuyue.page.scss'],
})
export class YuyuePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert("aaa");
  }

}
