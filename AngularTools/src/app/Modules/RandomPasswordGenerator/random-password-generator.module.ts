import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomPasswordGeneratorRoutingModule } from './random-password-generator-routing.module';
import { RPGOpenerComponent } from './RPGOpener/rpgopener.component';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    RPGOpenerComponent
  ],
  imports: [
    CommonModule,
    RandomPasswordGeneratorRoutingModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzSliderModule,
    FormsModule,
    NzInputNumberModule,
    NzRadioModule,
    NzCheckboxModule,
    NzToolTipModule
  ]
})
export class RandomPasswordGeneratorModule { }
