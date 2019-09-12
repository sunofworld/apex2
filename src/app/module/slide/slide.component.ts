import { Component, OnInit, ViewChild } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { TooneService } from '../../services/toone.service'

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  @ViewChild('slides') slides:any;

  slideOpts = {
    effect: 'flip',
    loop:true,
    zoom:false,
    slidesPerView:'aoto',
    autoplay:true,
    speed:100
  };

  public gg:any;

  constructor(private getdata:GetdataService,private toone:TooneService) { }

  ngOnInit() {
    this.getdata.getjsondata("http://10.100.234.54:8088/AD/getAD").subscribe((data)=>{
      this.gg=data;
    })
  }

  ngAfterViewInit(): void {
    this.plays();
    
  }


  plays(){
    this.slides.startAutoplay();
    
  }

  clicka(val:any){
    this.toone.goto(val);
  }

}
