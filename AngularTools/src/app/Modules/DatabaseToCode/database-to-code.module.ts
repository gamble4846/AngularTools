import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseToCodeRoutingModule } from './database-to-code-routing.module';
import { DTCOpenerComponent } from './Components/DTCOpener/dtcopener.component';


@NgModule({
  declarations: [
    DTCOpenerComponent
  ],
  imports: [
    CommonModule,
    DatabaseToCodeRoutingModule
  ]
})
export class DatabaseToCodeModule { }
