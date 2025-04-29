import { CommonModule } from '@angular/common';
import { Component, computed, Input, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { WebSnap } from '../../../models/web-snap.model';

@Component({
  selector: 'app-web-snap',
  imports: [
    CommonModule
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit {
  title!: string;
  description!: string;
  image!: string;
  createdDate!: Date;
  likes!: WritableSignal<number>;
  isLiked: WritableSignal<boolean> = signal(false);
  @Input() websnap?: WebSnap;

  ngOnInit(): void {
    this.title = "Mon WebSnap";
    this.description = "Je suis un websnap !";
    this.image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80";
    this.createdDate = new Date();
    this.likes = signal(42);
  }

  onToggleLikes(): void {
    if (!this.isLiked()) {
      this.likes.update((likes: number) => likes + 1);
      this.isLiked.update((state: boolean) => !state);
      return;
    }

    this.likes.update((likes: number) => likes - 1);
    this.isLiked.update((state: boolean) => !state);

  }
}
