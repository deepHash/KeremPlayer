import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerHeaderComponent } from './player-container/player-header/player-header.component';
import { PlayerMainComponent } from './player-container/player-main/player-main.component';
import { PlayerNavComponent } from './player-container/player-nav/player-nav.component';
import { JoinComponent } from './main/join/join.component';
import { UserDetailsComponent } from './main/user-details/user-details.component';
import { SimilarArtistsComponent } from './player-container/similar-artists/similar-artists.component';
import { SimilarMixesComponent } from './player-container/similar-mixes/similar-mixes.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MainComponent,
    HeaderComponent,
    PlayerContainerComponent,
    PlayerHeaderComponent,
    PlayerMainComponent,
    PlayerNavComponent,
    JoinComponent,
    UserDetailsComponent,
    SimilarArtistsComponent,
    SimilarMixesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
