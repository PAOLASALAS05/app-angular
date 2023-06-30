import { Component } from '@angular/core';
import { Persona } from './types/persona.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto';

  valor : Persona = {
    name: 'Juan',
    lastname: 'Perez',
    address: {
      street: 'Calle siempre viva',
      number: 123,
      state: 'Argentina'
    }
  }

}
