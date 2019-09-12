import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service'

@Component({
  selector: 'app-daifa',
  templateUrl: './daifa.page.html',
  styleUrls: ['./daifa.page.scss'],
})
export class DaifaPage implements OnInit {

  public oder: any;

  constructor(private getdata: GetdataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.getdata.getoder("/oderinfo/dfoder").subscribe((result: any) => {
      this.oder = result.json();
    })
  }

}
