import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [TopComponent]
})
export class TopModule { }
