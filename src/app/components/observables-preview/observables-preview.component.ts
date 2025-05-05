import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
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
  observableMergeMap!: ObservablesPreview;
  observableSwitchMap!: ObservablesPreview;
  observableExhaustMap!: ObservablesPreview;
  observableConcatMap!: ObservablesPreview;

  observablesPreview:WritableSignal<ObservablesPreview[]> = signal([]);


  ngOnInit():void{
    this.observableMergeMap = new ObservablesPreview(
      "Exemple mergeMap",
      "🥇",
      "🥈",
      "Launch 🥇",
      "Launch 🥈",
      "🥇/🥈",
      "mergeMapObservable");

    this.observableSwitchMap = new ObservablesPreview(
      "Exemple switchMap",
      "🐰",
      "🐢",
      "Launch 🐰",
      "Launch 🐢",
      "🐢/🦊",
      "switchMapObservable"
    );

    this.observableExhaustMap = new ObservablesPreview(
      "Exemple exhaustMap",
      "⛱️",
      "🏔️",
      "Launch ⛱️",
      "Launch 🏔️",
      "⛱️/🏔️",
      "exhaustMapObservable"
    );

    this.observableConcatMap = new ObservablesPreview(
      "Exemple concatMap",
      "☀️",
      "🌙",
      "Launch ☀️",
      "Launch 🌙",
      "☀️/🌙",
      "concatMapObservable"
    );
    
    this.observablesPreview.set([
      this.observableMergeMap,
      this.observableSwitchMap,
      this.observableExhaustMap,
      this.observableConcatMap
    ]);
  }
}
