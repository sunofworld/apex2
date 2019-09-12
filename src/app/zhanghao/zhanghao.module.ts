import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZhanghaoPage } from './zhanghao.page';

const routes: Routes = [
  {
    path: '',
    component: ZhanghaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZhanghaoPage]
})
export class ZhanghaoPageModule {}
