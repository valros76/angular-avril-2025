import { Component, inject, OnInit } from '@angular/core';
import { WebSnapsService } from '@/services/web-snaps.service';
import { WebSnapI } from '@/interfaces/web-snap.interface';
import { WebSnapDetailsComponent } from '@/components/web-snap-details/web-snap-details.component';

@Component({
  selector: 'app-web-snap-list',
  imports: [
    WebSnapDetailsComponent
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
