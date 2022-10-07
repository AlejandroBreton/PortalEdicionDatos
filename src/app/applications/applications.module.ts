import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { PrimengModule } from '../primeng/primeng.module';

import { TerminalComponent } from './components/terminal/terminal.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ParametrosComponent } from './components/parametros/parametros.component';



@NgModule({
  declarations: [
    TerminalComponent,
    HomeComponent,
    SucursalesComponent,
    ParametrosComponent,
    
    //CalendarModule
    //BrowserModule,
    //BrowserAnimationsModule,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    PrimengModule,
    CalendarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PrimengModule
  ]
})
export class ApplicationsModule { }
