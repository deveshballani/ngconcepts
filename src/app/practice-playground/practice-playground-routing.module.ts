import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticePlaygroundComponent } from './practice-playground.component';

const routes: Routes = [
  {
    path: '',
    component: PracticePlaygroundComponent
  },
  {
    path: 'rxjs', 
    loadChildren: () => import('./practice-rxjs/practice-rxjs.module').then(m => m.PracticeRxjsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticePlaygroundRoutingModule { }
