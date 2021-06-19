import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticePlaygroundRoutingModule } from './practice-playground-routing.module';
import { PracticePlaygroundComponent } from './practice-playground.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PracticePlaygroundComponent],
  imports: [
    CommonModule,
    PracticePlaygroundRoutingModule,
    FormsModule
  ]
})
export class PracticePlaygroundModule { }
