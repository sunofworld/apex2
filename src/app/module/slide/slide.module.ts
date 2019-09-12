import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './slide.component'

@NgModule({
  declarations: [ SlideComponent ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[SlideComponent]
})
export class SlideModule { }
