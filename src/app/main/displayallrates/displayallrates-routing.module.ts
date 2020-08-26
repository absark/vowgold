import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayallratesPage } from './displayallrates.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayallratesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayallratesPageRoutingModule {}
