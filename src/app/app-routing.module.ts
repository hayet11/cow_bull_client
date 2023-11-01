import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
    component:InitialComponent,
    path:'initial'
  },
  {
    component:PlayComponent,
    path:'play'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
