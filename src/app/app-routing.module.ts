import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnakeComponent } from './snake/snake.component';
import { PptComponent } from './ppt/ppt.component';
import { DamasComponent } from './damas/damas.component';

const routes: Routes = [
  {
    path:'ppt',
    component:PptComponent
  },
  {
    path:'snake',
    component:SnakeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
