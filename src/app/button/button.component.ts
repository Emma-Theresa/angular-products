import { Component, EventEmitter, Input, Output, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string=""
@Output() myEvent=new EventEmitter()

emitEvent(){
  this.myEvent.emit("Hello World")
}
}
