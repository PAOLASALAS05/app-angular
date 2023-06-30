import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  consulta: string = 'Consulta de prueba';

  estaListo: boolean = false;

  mostrarCambios = () => {
    console.log('la variable consulta tiene:', this.consulta);
    console.log('Cantidad de caracteres: ', this.consulta.length);
  }
}
