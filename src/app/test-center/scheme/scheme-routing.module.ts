import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemePage } from './scheme.page';

const routes: Routes = [
  {
    path: '',
    component: SchemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemePageRoutingModule {}
