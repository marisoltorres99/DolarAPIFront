import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dolar-convertir',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dolar-convertir.component.html',
  styleUrl: './dolar-convertir.component.css'
})
export class DolarConvertirComponent {
  tipoDolar: string = '';
  cantidad: number | null = null;
  resultado: number | null = null;

  constructor(private http: HttpClient) {}

  convertir() {
    if (!this.tipoDolar || this.cantidad == null) return;

    const url = `http://localhost:5016/api/dolar/${this.tipoDolar}/${this.cantidad}`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (data) => {
        this.resultado = parseFloat(data);
      },
      error: (err) => {
        console.error('Error al convertir:', err);
        this.resultado = null;
      }
    });
  }
}
