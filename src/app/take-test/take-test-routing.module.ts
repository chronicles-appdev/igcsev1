import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeTestPage } from './take-test.page';

const routes: Routes = [
  {
    path: '',
    component: TakeTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeTestPageRoutingModule {}
