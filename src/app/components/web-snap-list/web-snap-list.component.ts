import { Component, inject, OnInit } from '@angular/core';
import { WebSnap } from '@/models/web-snap.model';
import { WebSnapComponent } from '@/components/web-snap/web-snap.component';
import { WebSnapsService } from '@/services/web-snaps.service';
import { WebSnapI } from '@/interfaces/web-snap.interface';

@Component({
  selector: 'app-web-snap-list',
  imports: [
    WebSnapComponent
  ],
  templateUrl: './web-snap-list.component.html',
  styleUrl: './web-snap-list.component.css'
})
export class WebSnapListComponent implements OnInit{
  private websnapsService = inject(WebSnapsService);

  webSnapsDatalist!: WebSnapI[];

  ngOnInit(): void{
    this.webSnapsDatalist = this.websnapsService.getWebsnapList();
  }
}
