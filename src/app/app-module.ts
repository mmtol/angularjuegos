import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SubidaFicherosComponent } from '../components/subida-ficheros.component/subida-ficheros.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import ServiceFicheros from '../services/service.ficheros';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: 
  [
    App,
    SubidaFicherosComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceFicheros
  ],
  bootstrap: [App]
})
export class AppModule { }
