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
import { SimilarArtistsComponent } from './player-container/similar-artists/similar-artists.component';

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
    SimilarArtistsComponent
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
