import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';
import { Libro } from '@shared/models/libro.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  public libros = signal<Libro[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiUrl;

  constructor() {
    this.getLibros();
  }

  public getLibros(): void {
    this._http.get<Libro[]>(`${this._endPoint}/products`)
      .pipe(tap((data: Libro[]) => this.libros.set(data)))
      .subscribe();
  }

  public getLibrosById(id: number) {
    return this._http.get<Libro>(`${this._endPoint}/products/${id}`);
  }
}
