import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TuijianPage } from './tuijian.page';
import { SlideModule } from '../../module/slide/slide.module';

const routes: Routes = [
  {
    path: '',
    component: TuijianPage
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
  declarations: [TuijianPage]
})
export class TuijianPageModule {}
