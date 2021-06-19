import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeRxjsComponent } from './practice-rxjs.component';
import { RxjsExampleOneComponent } from './rxjs-example-one/rxjs-example-one.component';
import { RxjsExampleThreeComponent } from './rxjs-example-three/rxjs-example-three.component';
import { RxjsExampleTwoComponent } from './rxjs-example-two/rxjs-example-two.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeRxjsComponent,
    children: [
      {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full'
      },
      {
        path: 'one',
        component: RxjsExampleOneComponent
      },
      {
        path: 'two',
        component: RxjsExampleTwoComponent
      },
      {
        path: 'three',
        component: RxjsExampleThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRxjsRoutingModule { }
