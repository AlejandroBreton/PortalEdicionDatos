import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './components/terminal/terminal.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path:'', component: HomeComponent},
  { path:'terminal', component: TerminalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
