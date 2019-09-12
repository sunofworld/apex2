import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  public oder: any;

  constructor(private getdata: GetdataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.getdata.getoder("/oderinfo/alloder").subscribe((result: any) => {
      this.oder = result.json();
    })
  }

}
