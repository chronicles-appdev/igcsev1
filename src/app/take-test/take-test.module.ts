import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeTestPageRoutingModule } from './take-test-routing.module';

import { TakeTestPage } from './take-test.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTestPageRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  declarations: [TakeTestPage]
})
export class TakeTestPageModule {}
