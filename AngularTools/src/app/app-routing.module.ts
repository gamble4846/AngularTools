import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'TenMDSocialPostCreator'},
  {path: 'TenMDSocialPostCreator', loadChildren: () => import('./Modules/TenMDSocialPostCreator/ten-mdsocial-post-creator.module').then(m => m.TenMDSocialPostCreatorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
