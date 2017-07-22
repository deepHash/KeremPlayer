import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainComponent } from './new-user/main/main.component';
import { HeaderComponent } from './header/header.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerHeaderComponent } from './player-container/player-header/player-header.component';
import { PlayerMainComponent } from './player-container/player-main/player-main.component';
import { PlayerNavComponent } from './player-container/player-nav/player-nav.component';
import { JoinComponent } from './new-user/main/join/join.component';
import { UserDetailsComponent } from './new-user/main/user-details/user-details.component';
import { SimilarArtistsComponent } from './player-container/similar-artists/similar-artists.component';
import { MusicTypeComponent } from './new-user/main/music-type/music-type.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SimilarMixesComponent } from './player-container/similar-mixes/similar-mixes.component';
import { ArtistsTypeComponent } from './new-user/main/artists-type/artists-type.component';
import { PlayerComponent } from './player-container/player/player.component';
import { PasswordComponent } from './new-user/main/password/password.component';
// import { YoutubePlayerModule } from 'ng2-youtube-player';

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
    MusicTypeComponent,
    NewUserComponent,
    SimilarMixesComponent,
    ArtistsTypeComponent,
    PlayerComponent,
    PasswordComponent
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
