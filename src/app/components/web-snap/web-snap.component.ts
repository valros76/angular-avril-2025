import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { WebSnapsService } from '@/services/web-snaps.service';
import { WebSnapI } from '@/interfaces/web-snap.interface';

@Component({
  selector: 'app-web-snap',
  imports: [
    CommonModule
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent{
  protected webSnapsService = inject(WebSnapsService);
  @Input() websnap?: WebSnapI;
}
