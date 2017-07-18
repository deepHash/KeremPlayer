import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerHeaderComponent } from './player-container/player-header/player-header.component';
import { PlayerNavComponent } from './player-container/player-nav/player-nav.component';
import { PlayerMainComponent } from './player-container/player-main/player-main.component';

export const router: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'header', component: HeaderComponent},
    { path: 'main', component: MainComponent},
    { path: 'player-header', component: PlayerHeaderComponent},
    { path: 'player-nav', component: PlayerNavComponent},
    { path: 'player-main', component: PlayerMainComponent},
    { path: 'player-container', component: PlayerContainerComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);