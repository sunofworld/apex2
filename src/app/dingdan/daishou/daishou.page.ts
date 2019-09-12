import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-daishou',
  templateUrl: './daishou.page.html',
  styleUrls: ['./daishou.page.scss'],
})
export class DaishouPage implements OnInit {

  public oder: any;

  constructor(private getdata: GetdataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.getdata.getoder("/oderinfo/dfoder").subscribe((result: any) => {
      this.oder = result.json();
      console.log(this.oder);
      
    })
  }

}
