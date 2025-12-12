import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    isOpen = false;

  open() {
    this.isOpen = true;
    document.body.classList.add('overflow-hidden'); 
  }

  close() {
    this.isOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

}









