import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './components/terminal/terminal.component';
import { HomeComponent } from './components/home/home.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ParametrosComponent } from './components/parametros/parametros.component';

const routes: Routes = [

  { path:'', component: HomeComponent},
  { path:'terminal',   component: TerminalComponent   },
  { path:'sucursales', component: SucursalesComponent },
  { path:'parametros', component: ParametrosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
