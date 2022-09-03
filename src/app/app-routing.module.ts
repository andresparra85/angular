import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetalleComponent } from './components/hero-detalle/hero-detalle.component';
import { OcultoComponent } from './components/oculto/oculto.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroeD/:id', component: HeroDetalleComponent},
  {path: 'oculto/:str' ,component:OcultoComponent},
  {path: 'privado' ,component:PrivateComponent ,
canActivate:[AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
