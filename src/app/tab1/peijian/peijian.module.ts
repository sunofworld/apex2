import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeijianPage } from './peijian.page';
import { SlideModule } from '../../module/slide/slide.module';

const routes: Routes = [
  {
    path: '',
    component: PeijianPage
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
  declarations: [PeijianPage]
})
export class PeijianPageModule {}
