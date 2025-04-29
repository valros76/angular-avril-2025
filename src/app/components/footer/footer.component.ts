import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  actualDate!:string;

  ngOnInit(): void{
    let newDate = new Date();
    this.actualDate = `${newDate.getFullYear()}`;
  }
}
