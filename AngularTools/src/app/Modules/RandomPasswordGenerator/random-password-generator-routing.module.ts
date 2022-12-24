import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RPGOpenerComponent } from './RPGOpener/rpgopener.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component:RPGOpenerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomPasswordGeneratorRoutingModule { }
