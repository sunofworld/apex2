import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DingdanPage } from './dingdan.page';

const routes: Routes = [
  {
    path: '',
    component: DingdanPage, children: [
      { path: "", redirectTo: 'all',pathMatch: 'full' },
      { path: 'all', loadChildren: './all/all.module#AllPageModule' },
      { path: 'daifa', loadChildren: './daifa/daifa.module#DaifaPageModule' },
      { path: 'daishou', loadChildren: './daishou/daishou.module#DaishouPageModule' },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DingdanPage]
})
export class DingdanPageModule { }
