import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer/observer.component';
import { SharedModule } from '../shared/shared.module';
import { BotRoutingModule } from './bot-routing.module';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ObserverComponent
  ],
  imports: [
    SharedModule,
    BotRoutingModule,
    CommonModule,
    NgxSelectModule,
    FormsModule
  ]
})
export class BotModule { }
