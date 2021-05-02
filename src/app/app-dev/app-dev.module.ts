import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppDevPageRoutingModule } from './app-dev-routing.module';

import { AppDevPage } from './app-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppDevPageRoutingModule
  ],
  declarations: [AppDevPage]
})
export class AppDevPageModule {}
