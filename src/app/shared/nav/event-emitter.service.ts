import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeMenuToggleMenuFunction = new EventEmitter();
  subsMenu: Subscription = new Subscription();

  constructor() { }

  onToggleMenuButtonClick() {
    this.invokeMenuToggleMenuFunction.emit();
  }
}
