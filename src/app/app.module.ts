import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetalleComponent } from './components/hero-detalle/hero-detalle.component';
import { SearchComponent } from './components/shared/search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { OcultoComponent } from './components/oculto/oculto.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './components/private/private.component';
//libreria para login


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroDetalleComponent,
    SearchComponent,
    FilterPipe,
    OcultoComponent,
    PrivateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    AuthModule.forRoot({
      domain: 'dev-66m7s2a6.us.auth0.com',
      clientId: '24WH8YgdsOrnN6RxNpUEWOlGRZFBt1NB',
      cacheLocation: 'localstorage',
      useRefreshTokens:true
    }),
    CommonModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
