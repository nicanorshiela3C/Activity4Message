import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDevPage } from './app-dev.page';

const routes: Routes = [
  {
    path: '',
    component: AppDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDevPageRoutingModule {}
