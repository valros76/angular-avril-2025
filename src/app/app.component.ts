import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { MainNavComponent } from '@/components/main-nav/main-nav.component';
import { ObservablesPreview } from './models/observables-preview.model';
import { ObservablesPreviewComponent } from '@/components/observables-preview/observables-preview.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainNavComponent,
    FooterComponent,
    ObservablesPreviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-train';
  observableMergeMap!: ObservablesPreview;
  observableSwitchMap!: ObservablesPreview;
  observableExhaustMap!: ObservablesPreview;
  observableConcatMap!: ObservablesPreview;

  ngOnInit(): void {
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
  }
}
