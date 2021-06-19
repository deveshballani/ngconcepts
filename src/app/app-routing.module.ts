import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'practice',
    pathMatch: 'full'
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice-playground/practice-playground.module').then(m => m.PracticePlaygroundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
