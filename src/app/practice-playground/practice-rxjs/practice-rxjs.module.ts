import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRxjsRoutingModule } from './practice-rxjs-routing.module';
import { PracticeRxjsComponent } from './practice-rxjs.component';
import { RxjsExampleOneComponent } from './rxjs-example-one/rxjs-example-one.component';
import { RxjsExampleTwoComponent } from './rxjs-example-two/rxjs-example-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsExampleThreeComponent } from './rxjs-example-three/rxjs-example-three.component';


@NgModule({
  declarations: [PracticeRxjsComponent, RxjsExampleOneComponent, RxjsExampleTwoComponent, RxjsExampleThreeComponent],
  imports: [
    CommonModule,
    PracticeRxjsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PracticeRxjsModule { }
