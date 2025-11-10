import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PDFPasswordRemoverRoutingModule } from './pdfpassword-remover-routing.module';
import { OpenerComponent } from './OpenerComponent/opener.component';


@NgModule({
  declarations: [
    OpenerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PDFPasswordRemoverRoutingModule
  ]
})
export class PDFPasswordRemoverModule { }
