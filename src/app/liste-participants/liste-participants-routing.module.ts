import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeParticipantsPage } from './liste-participants.page';

const routes: Routes = [
  {
    path: '',
    component: ListeParticipantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeParticipantsPageRoutingModule {}
