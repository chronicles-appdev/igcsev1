import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbtPageRoutingModule } from './cbt-routing.module';
import { QuestionComponent } from './question/question.component'
import { CbtPage } from './cbt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbtPageRoutingModule
    
  ],
  declarations: [CbtPage, QuestionComponent]
})
export class CbtPageModule {}
