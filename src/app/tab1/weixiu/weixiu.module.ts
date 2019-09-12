import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeixiuPage } from './weixiu.page';
import { SlideModule } from '../../module/slide/slide.module';

const routes: Routes = [
  {
    path: '',
    component: WeixiuPage,
    children: [
      { path: "", redirectTo: 'yuyue',pathMatch: 'full' },
      { path: 'yuyue', loadChildren: './yuyue/yuyue.module#YuyuePageModule' },
      { path: 'mengdian', loadChildren: './mengdian/mengdian.module#MengdianPageModule' },
      { path: 'wode', loadChildren: './wode/wode.module#WodePageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeixiuPage]
})
export class WeixiuPageModule { }
