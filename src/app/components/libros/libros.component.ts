import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { LibroService } from 'app/core/apis/libro.service';

@Component({
  selector: 'app-libros',
  imports: [CardComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss',
})
export default class LibrosComponent {
  private readonly libroSvc = inject(LibroService);
  libros = this.libroSvc.libros;
}
