import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ApplicationsModule } from './applications/applications.module';

import { AppComponent } from './app.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { SucursalesComponent } from './component/sucursales/sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametrosComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ApplicationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
