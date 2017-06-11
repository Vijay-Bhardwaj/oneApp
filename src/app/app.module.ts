import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HeroService} from './hero.service';
import {HeroesComponent} from './hero/heroes.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes',     component: HeroesComponent }])
],
providers: [HeroService],
  bootstrap
:
[AppComponent]
})

export class AppModule {
}
