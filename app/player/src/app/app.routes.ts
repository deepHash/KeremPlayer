import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MainComponent } from './new-user/main/main.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerHeaderComponent } from './player-container/player-header/player-header.component';
import { PlayerNavComponent } from './player-container/player-nav/player-nav.component';
import { PlayerMainComponent } from './player-container/player-main/player-main.component';
import { SimilarArtistsComponent } from './player-container/similar-artists/similar-artists.component';
import { JoinComponent } from './new-user/main/join/join.component';
import { UserDetailsComponent } from './new-user/main/user-details/user-details.component';

export const router: Routes = [
    { path: '', redirectTo: 'new-user', pathMatch: 'full'},
    { path: 'header', component: HeaderComponent},
    { path: 'new-user', component: NewUserComponent},
    { path: 'main', component: MainComponent},
    { path: 'join', component: JoinComponent},
    { path: 'user-details', component: UserDetailsComponent},
    { path: 'player-header', component: PlayerHeaderComponent},
    { path: 'player-nav', component: PlayerNavComponent},
    { path: 'player-main', component: PlayerMainComponent},
    { path: 'player-container', component: PlayerContainerComponent},
    { path: 'similar-artists', component: SimilarArtistsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);