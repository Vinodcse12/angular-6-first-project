import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyContainerComponent } from './components/body-container/body-container.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlgoFirstComponent } from './components/algo-first/algo-first.component';

const route : Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent},
  { path : 'firstAlgo', component : AlgoFirstComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    HomeComponent,
    AboutComponent,
    AlgoFirstComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
