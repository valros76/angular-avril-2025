import { WebSnapI } from '@/interfaces/web-snap.interface';
import { WebSnapsService } from '@/services/web-snaps.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-snap-details',
  imports: [
    CommonModule
  ],
  templateUrl: './web-snap-details.component.html',
  styleUrl: './web-snap-details.component.css'
})
export class WebSnapDetailsComponent {
  protected webSnapsService = inject(WebSnapsService);
  private router = inject(Router);
  @Input({required: true}) websnap!: WebSnapI;

  onShowWebsnap(id: number): void{
    this.router.navigateByUrl(`websnaps/websnap/${id}`);
  }
}
