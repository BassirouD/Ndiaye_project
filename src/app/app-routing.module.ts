import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
  {
    path: 'add-particicpant',
    loadChildren: () => import('./modals/add-particicpant/add-particicpant.module').then( m => m.AddParticicpantPageModule)
  },
  {
    path: 'update-participant',
    loadChildren: () => import('./modals/update-participant/update-participant.module').then( m => m.UpdateParticipantPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
