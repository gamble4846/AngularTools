import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoaderComponent } from './Components/Loader/loader.component';
import { FooterComponent } from './Components/Footer/footer.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzGridModule,
    NzCollapseModule,
    NzIconModule
  ],
  exports:[
    LoaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
