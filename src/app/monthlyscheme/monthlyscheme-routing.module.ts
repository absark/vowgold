import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyschemePage } from './monthlyscheme.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyschemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyschemePageRoutingModule {}
