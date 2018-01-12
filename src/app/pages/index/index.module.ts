import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './page/index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexComponent
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
