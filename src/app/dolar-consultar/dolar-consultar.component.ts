import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface DolarBlue {
  nombre: string;
  compra: number;
  venta: number;
}

@Component({
  selector: 'app-dolar-consultar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dolar-consultar.component.html',
  styleUrls: ['./dolar-consultar.component.css']
})
export class DolarConsultarComponent {
  tipoDolar: string = '';  // variable para bindear con ngModel en el input
  precio: number | null = null; // precio recibido
  errorMsg: string = '';

  constructor(private http: HttpClient) {}

  consultar() {
    if (!this.tipoDolar) {
      this.errorMsg = 'Por favor, ingrese un tipo de dólar';
      this.precio = null;
      return;
    }
    this.errorMsg = '';
    this.http.get<DolarBlue>(`http://localhost:5016/api/dolar/${this.tipoDolar.toLowerCase()}`)
      .subscribe({
        next: (data) => {
          this.precio = data.venta;
        },
        error: (err) => {
          this.errorMsg = 'Error al consultar el precio';
          this.precio = null;
          console.error(err);
        }
      });
  }
}
