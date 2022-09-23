import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenMDSocialPostCreatorRoutingModule } from './ten-mdsocial-post-creator-routing.module';
import { HomeComponent } from './Home/home.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TenMDSocialPostCreatorRoutingModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ]
})
export class TenMDSocialPostCreatorModule { }
