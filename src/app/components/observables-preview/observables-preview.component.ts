import { Component, Input, OnInit } from '@angular/core';
import { ObservablesPreview } from '@/models/observables-preview.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observables-preview',
  imports: [
    CommonModule
  ],
  templateUrl: './observables-preview.component.html',
  styleUrl: './observables-preview.component.css'
})
export class ObservablesPreviewComponent implements OnInit{
  @Input({required: true}) observablesPreview!:ObservablesPreview;

  ngOnInit():void{
    console.log(this.observablesPreview.launchObservableMethod(this.observablesPreview.observableType));
  }
}
