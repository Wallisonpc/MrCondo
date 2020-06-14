import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpasswordPagePageRoutingModule } from './resetpassword-page-routing.module';

import { ResetpasswordPagePage } from './resetpassword-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpasswordPagePageRoutingModule
  ],
  declarations: [ResetpasswordPagePage]
})
export class ResetpasswordPagePageModule {}
