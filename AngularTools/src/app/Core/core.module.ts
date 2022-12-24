import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoaderComponent } from './Components/Loader/loader.component';

import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    LoaderComponent,
    NzMessageModule
  ]
})
export class CoreModule { }
