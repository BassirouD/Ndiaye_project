import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddParticicpantPage } from './add-particicpant.page';

const routes: Routes = [
  {
    path: '',
    component: AddParticicpantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddParticicpantPageRoutingModule {}
