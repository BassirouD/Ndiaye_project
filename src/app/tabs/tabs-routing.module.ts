import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'acceuil',
                loadChildren: () => import('../acceuil/acceuil.module').then(m => m.AcceuilPageModule)
            },
            {
                path: 'liste-participants',
                loadChildren: () => import('../liste-participants/liste-participants.module').then(m => m.ListeParticipantsPageModule)
            },
            {
                path: 'liste-sessions',
                loadChildren: () => import('../liste-sessions/liste-sessions.module').then(m => m.ListeSessionsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/acceuil',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/acceuil',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
