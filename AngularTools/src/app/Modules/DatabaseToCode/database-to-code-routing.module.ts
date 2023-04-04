import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DTCOpenerComponent } from './Components/DTCOpener/dtcopener.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component:DTCOpenerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseToCodeRoutingModule { }
