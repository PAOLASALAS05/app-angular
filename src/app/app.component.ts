import { Component } from '@angular/core';

type Persona = {
  name: string;
  lastname: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  valor: Persona ={
    name: "juan",
    lastname: "perez",
    age: 25
  }
}
