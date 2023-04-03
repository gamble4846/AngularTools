import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DTMOpenerComponent } from './DTMOpener/dtmopener.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component:DTMOpenerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseToModelsRoutingModule { }
