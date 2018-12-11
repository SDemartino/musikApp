import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArtistListComponent} from './music/artist-list/artist-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ArtistComponent} from './music/artist/artist.component';
import {RouterModule, Routes} from '@angular/router';
import { BandComponent } from './music/band/band.component';
import { ArtistFormComponent } from './music/artist-form/artist-form.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TypComponent } from './music/typ/typ.component';
import { TypListComponent } from './music/typ-list/typ-list.component';
import { TypFormComponent } from './music/typ-form/typ-form.component';
import { BandFormComponent } from './music/band-form/band-form.component';
import { BandListComponent } from './music/band-list/band-list.component';
import { MultichoiseComponent } from './multichoise/multichoise.component';

const appRoutes: Routes = [
  {path: '', component: ArtistComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'band', component: BandComponent},
  {path: 'typ', component: TypComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistComponent,
    BandComponent,
    ArtistFormComponent,
    TypComponent,
    TypListComponent,
    TypFormComponent,
    BandFormComponent,
    BandListComponent,
    MultichoiseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
