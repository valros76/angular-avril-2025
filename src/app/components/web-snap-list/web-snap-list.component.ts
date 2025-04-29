import { Component, OnInit } from '@angular/core';
import { WebSnap } from '../../../models/web-snap.model';
import { WebSnapComponent } from '../web-snap/web-snap.component';

@Component({
  selector: 'app-web-snap-list',
  imports: [
    WebSnapComponent
  ],
  templateUrl: './web-snap-list.component.html',
  styleUrl: './web-snap-list.component.css'
})
export class WebSnapListComponent implements OnInit{
  webSnapsDatalist!: WebSnap[];

  ngOnInit(): void{
    this.webSnapsDatalist = [
      new WebSnap(
        "Webdevoo",
        "Concepteur de sites internet et boutiques en ligne",
        new Date(),
        0,
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
      ),
      new WebSnap(
        "Aux Essences Elfiques",
        "Artisanat et commerce de produits à base de cire parfumée",
        new Date(),
        42,
        "https://images.unsplash.com/photo-1687937479525-8a00d9e285a3?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
      new WebSnap(
        "Webdevoo Formation",
        "Organisme de formation dans les domaines du développement web et du e-commerce",
        new Date(),
        21865,
        "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      )
    ];
  }
}
