import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)},
  {path: 'RandomPasswordGenerator', loadChildren: () => import('./Modules/RandomPasswordGenerator/random-password-generator.module').then(m => m.RandomPasswordGeneratorModule)},
  {path: 'DatabaseToModels', loadChildren: () => import('./Modules/DatabaseToModels/database-to-models.module').then(m => m.DatabaseToModelsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
