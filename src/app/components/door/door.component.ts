import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss'
})
export class DoorComponent {
  @Output() doorEvents = new EventEmitter();

  performDoorAction(action: boolean){
    this.doorEvents.emit(action);
  }
}
