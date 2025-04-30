import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { WebSnapsService } from '@/services/web-snaps.service';
import { WebSnapI } from '@/interfaces/web-snap.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-web-snap',
  imports: [
    CommonModule
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit{
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected webSnapsService = inject(WebSnapsService);
  websnap!: WebSnapI|undefined;

  ngOnInit(): void{
    let id: number = Number(this.route.snapshot.params["id"]);

    if(!id){
      this.router.navigateByUrl("erreur/404");
    }

    this.websnap = this.webSnapsService.getWebsnapByID(id);
    if(!this.websnap) {
      this.router.navigateByUrl("websnaps");
    }
  }
}
