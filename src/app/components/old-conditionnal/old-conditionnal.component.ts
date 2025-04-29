import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-old-conditionnal',
  imports: [
    CommonModule
  ],
  templateUrl: './old-conditionnal.component.html',
  styleUrl: './old-conditionnal.component.css'
})
export class OldConditionnalComponent {
  ifStateTestor?: number = undefined;
  forDatasTestor: string[] = [
    "Lorem ipsum",
    "Sit dolor",
    "Amet"
  ];

  onChangeInput(step:number){
    switch(true){
      case (step > 0 && step < 42):
      this.ifStateTestor = 14;
      break;
      case (step >= 42 && step <= 54):
      this.ifStateTestor = 42;
      break;
      default:
        this.ifStateTestor = -12;
      break;
    }
  }
}
