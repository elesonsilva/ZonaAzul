import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css'
})
export class CorpoComponent {

 back ='';
 



  abrirCopacabana():void{
      this.back = "back"
  }
}
