import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasswordPagePage } from './resetpassword-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpasswordPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpasswordPagePageRoutingModule {}
