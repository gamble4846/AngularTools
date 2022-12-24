import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOpenerComponent } from './HomeOpener/home-opener.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component:HomeOpenerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
