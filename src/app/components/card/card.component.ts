import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Libro } from '@shared/models/libro.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  libro = input.required<Libro>();
  @Output()addToCartEvent = new EventEmitter<Libro>();

  onAddtoCart():void{
  this.addToCartEvent.emit(this.libro());
  }
}
