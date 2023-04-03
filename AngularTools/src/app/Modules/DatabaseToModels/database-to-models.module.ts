import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseToModelsRoutingModule } from './database-to-models-routing.module';
import { DTMOpenerComponent } from './DTMOpener/dtmopener.component';


@NgModule({
  declarations: [
    DTMOpenerComponent
  ],
  imports: [
    CommonModule,
    DatabaseToModelsRoutingModule
  ]
})
export class DatabaseToModelsModule { }
