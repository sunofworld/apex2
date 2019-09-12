import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectlistPage } from './selectlist.page';
import { TopModule } from '../module/top/top.module'

const routes: Routes = [
  {
    path: '',
    component: SelectlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectlistPage]
})
export class SelectlistPageModule {}
