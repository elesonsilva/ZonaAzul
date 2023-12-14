import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { CorpoComponent } from "./components/corpo/corpo.component";
import { RodapeComponent } from "./components/rodape/rodape.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CabecalhoComponent, CorpoComponent, RodapeComponent]
})
export class AppComponent {
  title = 'ZonaAzul';
}
