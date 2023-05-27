import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppListComponent } from 'src/app/shared/app-list/app-list.component';

import { IntroSetupComponent } from './features/intro-setup/intro-setup.component';

@NgModule({
  declarations: [
  AppComponent,
  AppListComponent,
  IntroSetupComponent,
],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
