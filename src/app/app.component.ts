import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSnapListComponent } from './components/web-snap-list/web-snap-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WebSnapListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-train';

  ngOnInit(): void {
    
  }
}
