import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { TopModule } from '../module/top/top.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TopModule,
    RouterModule.forChild([{
      path: '', component: Tab1Page, children: [
        { path: "", loadChildren: './tuijian/tuijian.module#TuijianPageModule' },
        { path: 'tuijian', loadChildren: './tuijian/tuijian.module#TuijianPageModule' },
        { path: 'peijian', loadChildren: './peijian/peijian.module#PeijianPageModule' },
        { path: 'weixiu', loadChildren: './weixiu/weixiu.module#WeixiuPageModule' },
        { path: 'huodong', loadChildren: './huodong/huodong.module#HuodongPageModule' },]
    }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
